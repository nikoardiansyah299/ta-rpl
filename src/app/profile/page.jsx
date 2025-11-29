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
        alamat: {
            negara: "",
            kota: "",
            jalan: "",
            detail: ""
        }
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

                // Cek apakah user login via NextAuth (Google) atau JWT
                const isNextAuthUser = session?.user?.id_user && status === 'authenticated';
                
                if (isNextAuthUser) {
                    // Untuk NextAuth, ambil dari session dan API
                    const res = await fetch('/api/me');
                    const data = await res.json();
                    
                    // Prioritaskan image dari session NextAuth (Google OAuth)
                    const userImage = session.user.image || session.user.picture || null;
                    
                    if (res.ok && data.user) {
                        userData = {
                            ...data.user,
                            // Prioritaskan image dari session (Google OAuth)
                            image: userImage || data.user.image || null,
                            authProvider: 'google'
                        };
                    } else {
                        userData = {
                            id_user: session.user.id_user,
                            username: session.user.username || session.user.name,
                            email: session.user.email,
                            image: userImage,
                            authProvider: 'google',
                            alamat: session.user.alamat || null
                        };
                    }
                } else {
                    // Untuk JWT auth, ambil dari API
                    const res = await fetch('/api/me');
                    const data = await res.json();
                    
                    if (res.ok && data.user) {
                        userData = {
                            ...data.user,
                            // Coba ambil image dari session jika ada
                            image: session?.user?.image || session?.user?.picture || data.user.image || null,
                            authProvider: 'jwt'
                        };
                    } else {
                        router.push('/login');
                        return;
                    }
                }
                
                // Debug logging (bisa dihapus setelah testing)
                console.log('User data loaded:', { 
                    hasImage: !!userData.image, 
                    imageSource: userData.image ? 'session' : 'none',
                    sessionImage: session?.user?.image 
                });

                if (userData) {
                    setUser(userData);
                    // Parse alamat jika sudah ada (dari JSON)
                    let parsedAlamat = {
                        negara: "",
                        kota: "",
                        jalan: "",
                        detail: ""
                    };
                    
                    if (userData.alamat) {
                        if (typeof userData.alamat === 'string') {
                            try {
                                parsedAlamat = JSON.parse(userData.alamat);
                            } catch (e) {
                                // Jika bukan JSON, tetap gunakan default
                            }
                        } else if (typeof userData.alamat === 'object') {
                            parsedAlamat = {
                                negara: userData.alamat.negara || "",
                                kota: userData.alamat.kota || "",
                                jalan: userData.alamat.jalan || "",
                                detail: userData.alamat.detail || ""
                            };
                        }
                    }
                    
                    setFormData({
                        username: userData.username || "",
                        email: userData.email || "",
                        alamat: parsedAlamat,
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
                if (!res.ok) throw new Error(data?.message || 'Failed to load orders');
                if (mounted) setOrders(data.transaksi || []);
            } catch (err) {
                console.error('Error fetching orders:', err);
                if (mounted) setOrdersError(err.message || 'Failed to load orders');
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
            alert("Username adn Email cannot be empty");
            return;
        }

        // Validasi alamat
        if (!formData.alamat.negara.trim() || !formData.alamat.kota.trim() || !formData.alamat.jalan.trim()) {
            alert("Country, City, and Street are required in the address");
            return;
        }

        setSaving(true);
        try {
            // Kirim alamat dalam format JSON
            const alamatData = {
                negara: formData.alamat.negara.trim(),
                kota: formData.alamat.kota.trim(),
                jalan: formData.alamat.jalan.trim(),
                detail: formData.alamat.detail.trim() || null
            };

            const res = await fetch('/api/profile/update-alamat', {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ alamat: alamatData }),
            });

            const data = await res.json();

            if (res.ok) {
                // Pastikan image tetap dipertahankan setelah update
                setUser({ 
                    ...user, 
                    ...data.user,
                    image: user.image || session?.user?.image || data.user.image || null
                });
                setEditing(false);
                alert("Profile updated successfully!");
            } else {
                alert(data.error || "Failed to update profile");
            }
        } catch (err) {
            console.error('Error saving profile:', err);
            alert("Error occurred while saving profile");
        } finally {
            setSaving(false);
        }
    };

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
                    <div className="text-center mb-12 mt-10">
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.2 }}
                            className="w-32 h-32 mx-auto mb-6 relative"
                        >
                            {user.image ? (
                                <img 
                                    src={user.image} 
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
                                            // Reset form data dengan data user yang ada
                                            let parsedAlamat = {
                                                negara: "",
                                                kota: "",
                                                jalan: "",
                                                detail: ""
                                            };
                                            
                                            if (user.alamat) {
                                                if (typeof user.alamat === 'string') {
                                                    try {
                                                        parsedAlamat = JSON.parse(user.alamat);
                                                    } catch (e) {
                                                        // Jika bukan JSON, tetap gunakan default
                                                    }
                                                } else if (typeof user.alamat === 'object') {
                                                    parsedAlamat = {
                                                        negara: user.alamat.negara || "",
                                                        kota: user.alamat.kota || "",
                                                        jalan: user.alamat.jalan || "",
                                                        detail: user.alamat.detail || ""
                                                    };
                                                }
                                            }
                                            
                                            setFormData({
                                                username: user.username || "",
                                                email: user.email || "",
                                                alamat: parsedAlamat,
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
                                        Address
                                    </label>
                                    {editing ? (
                                        <div className="space-y-4">
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                <div>
                                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                                        Country *
                                                    </label>
                                                    <input
                                                        type="text"
                                                        value={formData.alamat.negara}
                                                        onChange={(e) =>
                                                            setFormData({
                                                                ...formData,
                                                                alamat: { ...formData.alamat, negara: e.target.value }
                                                            })
                                                        }
                                                        placeholder="Example: Indonesia"
                                                        className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                                        required
                                                    />
                                                </div>
                                                <div>
                                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                                        City *
                                                    </label>
                                                    <input
                                                        type="text"
                                                        value={formData.alamat.kota}
                                                        onChange={(e) =>
                                                            setFormData({
                                                                ...formData,
                                                                alamat: { ...formData.alamat, kota: e.target.value }
                                                            })
                                                        }
                                                        placeholder="Example: Jakarta"
                                                        className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                                        required
                                                    />
                                                </div>
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                                    Street *
                                                </label>
                                                <input
                                                    type="text"
                                                    value={formData.alamat.jalan}
                                                    onChange={(e) =>
                                                        setFormData({
                                                            ...formData,
                                                            alamat: { ...formData.alamat, jalan: e.target.value }
                                                        })
                                                    }
                                                    placeholder="Example: Jl. Merdeka 10"
                                                    className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                                    required
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                                    Other details (optional)
                                                </label>
                                                <textarea
                                                    value={formData.alamat.detail}
                                                    onChange={(e) =>
                                                        setFormData({
                                                            ...formData,
                                                            alamat: { ...formData.alamat, detail: e.target.value }
                                                        })
                                                    }
                                                    placeholder="Example: Near Microsoft Office A 2nd floor"
                                                    rows="3"
                                                    className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                                                />
                                            </div>
                                        </div>
                                    ) : (
                                        <div className="text-gray-900 bg-gray-50 rounded-xl px-4 py-3 min-h-[120px]">
                                            {user.alamat && typeof user.alamat === 'object' && user.alamat.negara ? (
                                                <div className="space-y-1">
                                                    <p className="font-medium">{user.alamat.jalan || ""}</p>
                                                    <p>{user.alamat.kota || ""}, {user.alamat.negara || ""}</p>
                                                    {user.alamat.detail && (
                                                        <p className="text-sm text-gray-600 mt-2">{user.alamat.detail}</p>
                                                    )}
                                                </div>
                                            ) : user.alamat && typeof user.alamat === 'string' ? (
                                                (() => {
                                                    try {
                                                        const parsed = JSON.parse(user.alamat);
                                                        return (
                                                            <div className="space-y-1">
                                                                <p className="font-medium">{parsed.jalan || ""}</p>
                                                                <p>{parsed.kota || ""}, {parsed.negara || ""}</p>
                                                                {parsed.detail && (
                                                                    <p className="text-sm text-gray-600 mt-2">{parsed.detail}</p>
                                                                )}
                                                            </div>
                                                        );
                                                    } catch (e) {
                                                        return <p>{user.alamat}</p>;
                                                    }
                                                })()
                                            ) : (
                                                <p>No address added</p>
                                            )}
                                        </div>
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
                                        <h3 className="font-semibold text-lg text-blue-800 mb-2">Security Notice</h3>
                                        <p className="text-gray-700 mb-3">Please be cautious when entering data on this site. Protect your personal information such as address, phone number, and payment details. Follow standard security practices to safeguard your account.</p>
                                        <ul className="list-disc list-inside text-gray-700 space-y-2">
                                            <li>Use a strong and unique password for your account.</li>
                                            <li>Avoid sharing tokens or credentials via messages/email.</li>
                                            <li>Ensure you are using a secure network (avoid public Wi-Fi when conducting sensitive transactions).</li>
                                            <li>Be wary of phishing links or emails claiming to be from our service—we will never ask for your password via email.</li>
                                            <li>Check the site URL before entering sensitive information, ensure it uses HTTPS.</li>
                                        </ul>
                                    </div>

                                    <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                                        <h4 className="font-semibold text-gray-900 mb-2">Professional Tips</h4>
                                        <p className="text-gray-700 mb-3">As a best practice, we recommend:</p>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <div className="p-3 border rounded-lg bg-gray-50">
                                                <p className="font-medium text-gray-800">Update Passwords Regularly</p>
                                                <p className="text-sm text-gray-600">Change your password every few months and use a password manager if needed.</p>
                                            </div>
                                            <div className="p-3 border rounded-lg bg-gray-50">
                                                <p className="font-medium text-gray-800">Enable Two-Factor Authentication</p>
                                                <p className="text-sm text-gray-600">If available, enable 2FA for an additional layer of protection on your account.</p>
                                            </div>
                                            <div className="p-3 border rounded-lg bg-gray-50">
                                                <p className="font-medium text-gray-800">Confirm Transactions</p>
                                                <p className="text-sm text-gray-600">Review the order summary before completing payment.</p>
                                            </div>
                                            <div className="p-3 border rounded-lg bg-gray-50">
                                                <p className="font-medium text-gray-800">Report Suspicious Activity</p>
                                                <p className="text-sm text-gray-600">Immediately contact the support team if you notice unusual activity on your account.</p>
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
                                                                <div key={d.id_detail} className="py-3 flex flex-col md:flex-row gap-4 items-center">
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