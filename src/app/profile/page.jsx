'use client'

import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { signOut, useSession } from 'next-auth/react';
import { FiUser, FiMail, FiMapPin, FiEdit2, FiSave, FiX, FiLogOut, FiShield, FiPackage, FiTrendingUp } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const ProfilePage = () => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [activeTab, setActiveTab] = useState('profile');
    const [editing, setEditing] = useState(false);
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        alamat: ""
    });
    const [saving, setSaving] = useState(false);
    const [orders, setOrders] = useState([]);
    const [ordersLoading, setOrdersLoading] = useState(false);
    const [ordersError, setOrdersError] = useState(null);
    const router = useRouter();
    const { data: session, status } = useSession();
    const containerRef = useRef(null);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                let userData = null;

                if (session?.user?.id_user) {
                    const res = await fetch('/api/me');
                    const data = await res.json();
                    
                    if (res.ok && data.user) {
                        userData = {
                            ...data.user,
                            authProvider: 'google'
                        };
                    } else {
                        userData = {
                            id_user: session.user.id_user,
                            username: session.user.username || session.user.name,
                            email: session.user.email,
                            image: session.user.image,
                            authProvider: 'google',
                            alamat: session.user.alamat || null
                        };
                    }
                } else {
                    const res = await fetch('/api/me');
                    const data = await res.json();
                    
                    if (res.ok && data.user) {
                        userData = {
                            ...data.user,
                            authProvider: 'jwt'
                        };
                    } else {
                        router.push('/login');
                        return;
                    }
                }

                if (userData) {
                    setUser(userData);
                    setFormData({
                        username: userData.username || "",
                        email: userData.email || "",
                        alamat: userData.alamat || "",
                    });
                }
            } catch (err) {
                console.error('Gagal ambil user:', err);
                router.push('/login');
                return;
            } finally {
                setLoading(false);
            }
        };

        if (status === 'loading') return;
        
        if (status === 'unauthenticated') {
            fetchUser();
        } else {
            fetchUser();
        }
    }, [session, status, router]);

    // Fetch user's orders when Orders tab is active
    useEffect(() => {
        if (activeTab !== 'orders') return;
        let mounted = true;
        async function fetchOrders() {
            setOrdersLoading(true);
            setOrdersError(null);
            try {
                const res = await fetch('/api/transaction/history', { cache: 'no-store' });
                const data = await res.json();
                if (!res.ok) throw new Error(data?.message || 'Gagal memuat pesanan');
                if (mounted) setOrders(data.transaksi || []);
            } catch (err) {
                console.error('Error fetching orders:', err);
                if (mounted) setOrdersError(err.message || 'Gagal memuat pesanan');
            } finally {
                if (mounted) setOrdersLoading(false);
            }
        }

        fetchOrders();
        return () => { mounted = false; };
    }, [activeTab]);

    const handleLogout = async () => {
        try {
            await fetch('/api/logout', { method: 'POST' });
            await signOut({ callbackUrl: '/login' });
        } catch (err) {
            console.error('Logout error:', err);
        }
    };

    const handleSaveProfile = async () => {
        if (!formData.username.trim() || !formData.email.trim()) {
            alert("Username dan email tidak boleh kosong");
            return;
        }

        setSaving(true);
        try {
            const res = await fetch('/api/profile/update-alamat', {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            const data = await res.json();

            if (res.ok) {
                setUser({ ...user, ...data.user });
                setEditing(false);
                alert("Profile berhasil diperbarui!");
            } else {
                alert(data.error || "Gagal memperbarui profile");
            }
        } catch (err) {
            console.error('Error saving profile:', err);
            alert("Terjadi kesalahan saat menyimpan profile");
        } finally {
            setSaving(false);
        }
    };

    const stats = [
        { label: "Total Transaksi", value: "12", icon: FiPackage, color: "text-blue-600" },
        { label: "Bergabung Sejak", value: "2024", icon: FiTrendingUp, color: "text-green-600" },
        { label: "Status", value: "Aktif", icon: FiShield, color: "text-purple-600" }
    ];

    if (loading || !user) {
        return (
            <div className="flex h-dvh w-full justify-center items-center bg-white">
                <div className="text-center">
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600 mx-auto mb-4"
                    />
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-gray-600 text-lg"
                    >
                        Memuat profile...
                    </motion.p>
                </div>
            </div>
        );
    }

    return (
        <>
            <Navbar textColor="text-gray-800" />
            <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white py-8 px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="max-w-6xl mx-auto"
                >
                    {/* Header Section */}
                    <div className="text-center mb-12">
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.2 }}
                            className="w-32 h-32 mx-auto mb-6 relative"
                        >
                            {user.image ? (
                                <img 
                                    src={user.image} 
                                    alt={user.username} 
                                    className="w-full h-full rounded-full object-cover shadow-lg border-4 border-white"
                                />
                            ) : (
                                <div className="w-full h-full rounded-full bg-gradient-to-r from-blue-600 to-blue-400 flex items-center justify-center text-white text-4xl font-bold">
                                    {user.username?.charAt(0).toUpperCase() || 'U'}
                                </div>
                            )}
                            <div className="absolute bottom-2 right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-white"></div>
                        </motion.div>
                        
                        <motion.h1
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3 }}
                            className="text-2xl md:text-4xl font-bold text-gray-900 mb-2"
                        >
                            {user.username}
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4 }}
                            className="text-sm ms:text-lg text-gray-600"
                        >
                            {user.email}
                        </motion.p>
                    </div>

                    {/* Stats Cards */}
                    {/* <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8"
                    >
                        {stats.map((stat, index) => (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.6 + index * 0.1 }}
                                whileHover={{ scale: 1.02 }}
                                className="bg-white rounded-2xl shadow-lg p-6 text-center border border-gray-100"
                            >
                                <stat.icon className={`w-8 h-8 mx-auto mb-3 ${stat.color}`} />
                                <h3 className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</h3>
                                <p className="text-gray-600">{stat.label}</p>
                            </motion.div>
                        ))}
                    </motion.div> */}

                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                        {/* Sidebar Navigation */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.7 }}
                            className="lg:col-span-1"
                        >
                            <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-8">
                                <nav className="space-y-2">
                                    {[
                                        { id: 'profile', label: 'Edit Profile', icon: FiUser },
                                        { id: 'security', label: 'Security', icon: FiShield },
                                        { id: 'orders', label: 'My Orders', icon: FiPackage }
                                    ].map((item) => (
                                        <button
                                            key={item.id}
                                            onClick={() => setActiveTab(item.id)}
                                            className={`w-full flex items-center px-4 py-3 rounded-xl transition-all duration-200 ${
                                                activeTab === item.id
                                                    ? 'bg-blue-600 text-white shadow-lg'
                                                    : 'text-gray-700 hover:bg-gray-100'
                                            }`}
                                        >
                                            <item.icon className="w-5 h-5 mr-3" />
                                            {item.label}
                                        </button>
                                    ))}
                                </nav>
                            </div>
                        </motion.div>

                        {/* Main Content */}
                        <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.8 }}
                        className="lg:col-span-3"
                        >
                        <div className="bg-white rounded-2xl shadow-lg p-8">
                            <AnimatePresence mode="wait">
                            {activeTab === 'profile' && (
                                <motion.div
                                key="profile"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="space-y-6"
                                >
                                {/* Header */}
                                <div className="flex justify-between items-center mb-6">
                                    <h2 className="text-2xl font-bold text-gray-900">Edit Profile</h2>

                                    {!editing ? (
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        onClick={() => setEditing(true)}
                                        className="flex items-center bg-blue-600 text-white px-6 py-2 rounded-xl hover:bg-blue-700 transition-colors"
                                    >
                                        <FiEdit2 className="w-4 h-4 mr-2" />
                                        Edit Alamat
                                    </motion.button>
                                    ) : (
                                    <div className="flex gap-2">
                                        <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        onClick={handleSaveProfile}
                                        disabled={saving}
                                        className="flex items-center bg-green-600 text-white px-6 py-2 rounded-xl hover:bg-green-700 transition-colors disabled:opacity-50"
                                        >
                                        <FiSave className="w-4 h-4 mr-2" />
                                        {saving ? "Menyimpan..." : "Simpan"}
                                        </motion.button>
                                        <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        onClick={() => {
                                            setEditing(false);
                                            setFormData({
                                            username: user.username || "",
                                            email: user.email || "",
                                            alamat: user.alamat || "",
                                            });
                                        }}
                                        className="flex items-center bg-gray-300 text-gray-700 px-6 py-2 rounded-xl hover:bg-gray-400 transition-colors"
                                        >
                                        <FiX className="w-4 h-4 mr-2" />
                                        Batal
                                        </motion.button>
                                    </div>
                                    )}
                                </div>

                                {/* Form Profile */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {/* Username (tidak bisa diedit) */}
                                    <div>
                                    <label className="flex items-center text-gray-700 font-semibold mb-2">
                                        <FiUser className="w-4 h-4 mr-2 text-blue-600" />
                                        Username
                                    </label>
                                    <input
                                        type="text"
                                        value={formData.username}
                                        disabled
                                        className="w-full border border-gray-200 rounded-xl px-4 py-3 bg-gray-100 text-gray-600 cursor-not-allowed"
                                    />
                                    </div>

                                    {/* Email (tidak bisa diedit) */}
                                    <div>
                                    <label className="flex items-center text-gray-700 font-semibold mb-2">
                                        <FiMail className="w-4 h-4 mr-2 text-blue-600" />
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        value={formData.email}
                                        disabled
                                        className="w-full border border-gray-200 rounded-xl px-4 py-3 bg-gray-100 text-gray-600 cursor-not-allowed"
                                    />
                                    </div>

                                    {/* Alamat (satu-satunya yang bisa diedit) */}
                                    <div className="md:col-span-2">
                                    <label className="flex items-center text-gray-700 font-semibold mb-2">
                                        <FiMapPin className="w-4 h-4 mr-2 text-blue-600" />
                                        Alamat
                                    </label>
                                    {editing ? (
                                        <textarea
                                        value={formData.alamat}
                                        onChange={(e) =>
                                            setFormData({ ...formData, alamat: e.target.value })
                                        }
                                        placeholder="Masukkan alamat lengkap"
                                        rows="4"
                                        className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                                        />
                                    ) : (
                                        <p className="text-lg text-gray-900 bg-gray-50 rounded-xl px-4 py-3 min-h-[120px]">
                                        {user.alamat || "Belum ada alamat yang ditambahkan"}
                                        </p>
                                    )}
                                    </div>
                                </div>
                                </motion.div>
                            )}

                            {activeTab === 'security' && (
                                <motion.div
                                    key="security"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    className="space-y-6"
                                >
                                    <div className="flex justify-between items-center mb-4">
                                        <h2 className="text-2xl font-bold text-gray-900">Security & Safety</h2>
                                    </div>

                                    <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-lg">
                                        <h3 className="font-semibold text-lg text-blue-800 mb-2">Perhatian Keamanan</h3>
                                        <p className="text-gray-700 mb-3">Harap berhati-hati saat memasukkan data ke situs ini. Lindungi informasi pribadi Anda seperti alamat, nomor telepon, dan detail pembayaran. Ikuti praktik keamanan standar untuk melindungi akun Anda.</p>
                                        <ul className="list-disc list-inside text-gray-700 space-y-2">
                                            <li>Gunakan kata sandi yang kuat dan unik untuk akun Anda.</li>
                                            <li>Hindari membagikan token atau kredensial melalui pesan/email.</li>
                                            <li>Pastikan Anda menggunakan jaringan yang aman (hindari Wi‑Fi publik saat melakukan transaksi sensitif).</li>
                                            <li>Waspadai tautan atau email phising yang mengatasnamakan layanan kami—kami tidak akan meminta kata sandi melalui email.</li>
                                            <li>Periksa URL situs sebelum memasukkan informasi sensitif, pastikan menggunakan HTTPS.</li>
                                        </ul>
                                    </div>

                                    <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                                        <h4 className="font-semibold text-gray-900 mb-2">Tips Profesional</h4>
                                        <p className="text-gray-700 mb-3">Sebagai praktik terbaik, kami menyarankan:</p>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <div className="p-3 border rounded-lg bg-gray-50">
                                                <p className="font-medium text-gray-800">Perbarui Kata Sandi Secara Berkala</p>
                                                <p className="text-sm text-gray-600">Ganti kata sandi setiap beberapa bulan dan gunakan manajer kata sandi jika perlu.</p>
                                            </div>
                                            <div className="p-3 border rounded-lg bg-gray-50">
                                                <p className="font-medium text-gray-800">Aktifkan Autentikasi Dua Faktor</p>
                                                <p className="text-sm text-gray-600">Jika tersedia, aktifkan 2FA untuk lapisan perlindungan tambahan pada akun Anda.</p>
                                            </div>
                                            <div className="p-3 border rounded-lg bg-gray-50">
                                                <p className="font-medium text-gray-800">Konfirmasi Transaksi</p>
                                                <p className="text-sm text-gray-600">Periksa ringkasan pesanan sebelum menyelesaikan pembayaran.</p>
                                            </div>
                                            <div className="p-3 border rounded-lg bg-gray-50">
                                                <p className="font-medium text-gray-800">Laporkan Aktivitas Mencurigakan</p>
                                                <p className="text-sm text-gray-600">Segera hubungi tim dukungan jika melihat aktivitas tidak biasa pada akun Anda.</p>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            )}
                            {activeTab === 'orders' && (
                                <motion.div
                                    key="orders"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    className="space-y-6"
                                >
                                    <div className="flex justify-between items-center mb-4">
                                        <h2 className="text-2xl font-bold text-gray-900">My Orders</h2>
                                    </div>

                                    <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                                        {ordersLoading ? (
                                            <p className="text-gray-500">Loading orders...</p>
                                        ) : ordersError ? (
                                            <p className="text-red-600">{ordersError}</p>
                                        ) : orders.length === 0 ? (
                                            <p className="text-gray-600">You have no orders yet.</p>
                                        ) : (
                                            <div className="space-y-4" onClick={() => router.push('/history')}>
                                                {orders.map((tx) => (
                                                    <div key={tx.id_transaksi} className="border rounded-lg p-4">
                                                        <div className="flex items-center justify-between mb-3">
                                                            <div>
                                                                <p className="text-sm text-gray-600">Order ID: <span className="font-medium text-gray-900">{tx.id_transaksi}</span></p>
                                                                <p className="text-sm text-gray-600">Date: <span className="font-medium text-gray-900">{new Date(tx.tgl_transaksi).toLocaleString()}</span></p>
                                                            </div>
                                                            <div className="text-sm text-gray-700">Status: <span className="font-semibold">{tx.status_transaksi || 'Pending'}</span></div>
                                                        </div>

                                                        <div className="divide-y">
                                                            {tx.detail_transaksi?.map((d) => (
                                                                <div key={d.id_detail} className="py-3 flex flex-col md:flex gap-4 items-center">
                                                                    <div className="w-16 h-16 bg-gray-100 rounded-md overflow-hidden shrink-0">
                                                                        <img src={d.produk?.gambar || d.produk?.image_url || '/product-fish/default.png'} alt={d.produk?.nama_produk} className="w-full h-full object-cover" />
                                                                    </div>
                                                                    <div className="flex-1">
                                                                        <p className="font-medium text-gray-900">{d.produk?.nama_produk}</p>
                                                                        <p className="text-sm text-gray-600">Qty: {d.jumlah_kg} kg</p>
                                                                    </div>
                                                                    <div className="text-right">
                                                                        <p className="font-semibold text-gray-900">Rp {d.subtotal?.toLocaleString()}</p>
                                                                    </div>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                </motion.div>
                            )}

                            {/* Tab Security dan Orders tetap seperti sebelumnya */}
                            </AnimatePresence>

                            {/* Logout Button */}
                            <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1 }}
                            className="mt-8 pt-6 border-t border-gray-200"
                            >
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                onClick={handleLogout}
                                className="w-full flex items-center justify-center bg-red-600 text-white py-3 px-4 rounded-xl hover:bg-red-700 transition-colors font-semibold"
                            >
                                <FiLogOut className="w-5 h-5 mr-2" />
                                Logout
                            </motion.button>
                            </motion.div>
                        </div>
                        </motion.div>

                    </div>
                </motion.div>
            </div>
            <Footer />
        </>
    );
}

export default ProfilePage;