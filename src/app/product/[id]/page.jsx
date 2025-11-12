'use client'
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState, useEffect, use } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import Cookies from "js-cookie";

const Notification = ({ message, type = 'success', onClose }) => {
    return (
        <div className={`fixed top-4 right-4 z-50 transform transition-all duration-300 ${
        message ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
        }`}>
        <div className={`flex items-center p-4 rounded-lg shadow-lg border-l-4 ${
            type === 'success' 
            ? 'bg-green-50 border-green-500 text-green-700' 
            : 'bg-red-50 border-red-500 text-red-700'
        } min-w-80 max-w-sm`}>
            <div className={`w-6 h-6 rounded-full flex items-center justify-center mr-3 ${
            type === 'success' ? 'bg-green-500' : 'bg-red-500'
            }`}>
            {type === 'success' ? (
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
            ) : (
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
            )}
            </div>
            <div className="flex-1">
            <p className="font-medium">{message}</p>
            </div>
            <button
            onClick={onClose}
            className="ml-4 text-gray-400 hover:text-gray-600 transition-colors"
            >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
            </button>
        </div>
        </div>
    );
};

export default function ProductDetail({ params }) {
    const router = useRouter();
    const { data: session } = useSession();
    const resolvedParams = use(params);
    const [loading, setLoading] = useState(false);
    const [product, setProduct] = useState(null);
    const [productLoading, setProductLoading] = useState(true);
    const [error, setError] = useState(null);
    const [quantity, setQuantity] = useState(1);
    const [notification, setNotification] = useState({
        show: false,
        message: '',
        type: 'success'
    });

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const res = await fetch(`/api/product/${resolvedParams.id}`, {
                    cache: "no-store",
                });
                const productData = await res.json();
                
                if (!productData || res.status === 404) {
                    setError("Produk tidak ditemukan");
                } else {
                    setProduct(productData);
                }
            } catch (err) {
                console.error("Error fetching product:", err);
                setError("Gagal memuat produk");
            } finally {
                setProductLoading(false);
            }
        };

        fetchProduct();
    }, [resolvedParams.id]);

    // Fungsi untuk mengatur quantity
    const increaseQuantity = () => {
        setQuantity(prev => prev + 1);
    };

    const decreaseQuantity = () => {
        if (quantity > 1) {
            setQuantity(prev => prev - 1);
        }
    };
    const showNotification = (message, type = 'success') => {
        setNotification({
        show: true,
        message,
        type
        });

        // Auto hide setelah 3 detik
        setTimeout(() => {
        setNotification(prev => ({ ...prev, show: false }));
        }, 3000);
    };

    const handleAddToCart = async () => {
        // Cek apakah user sudah login (NextAuth). For manual-login using httpOnly cookie
        // we don't rely on client-readable cookies; attempt the request and let
        // the server validate the cookie.
        const isNextAuthLoggedIn = session?.user?.id_user;

        // proceed and let server validate via cookie
        setLoading(true);
        try {
            const res = await fetch("/api/cart/add", {
                method: "POST",
                credentials: 'include',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    id_produk: product.id_produk,
                    jumlah_pembelian: quantity,
                    harga_satuan: product.harga_kg,
                }),
            });

            const data = await res.json();
            if (res.status === 401 || res.status === 403) {
                alert("Silakan login terlebih dahulu!");
                router.push("/login");
                return;
            }

            if (!res.ok) throw new Error(data.error || "Gagal menambahkan ke keranjang");
            showNotification("Produk berhasil ditambahkan ke keranjang!", "success");
        } catch (err) {
            console.error(err);
            showNotification(err.message, "error");
        } finally {
            setLoading(false);
        }
    };

    const handleOrderNow = async () => {
        // Cek apakah user sudah login (NextAuth). For manual-login using httpOnly cookie
        // we don't rely on client-readable cookies; attempt the request and let
        // the server validate the cookie.
        const isNextAuthLoggedIn = session?.user?.id_user;

        // proceed and let server validate via cookie
        setLoading(true);
        try {
            // Tambahkan produk ke keranjang dulu
            const res = await fetch("/api/cart/add", {
                method: "POST",
                credentials: 'include',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    id_produk: product.id_produk,
                    jumlah_pembelian: quantity,
                    harga_satuan: product.harga_kg,
                }),
            });

            const data = await res.json();
            if (res.status === 401 || res.status === 403) {
                alert("Silakan login terlebih dahulu!");
                router.push("/login");
                return;
            }

            if (!res.ok) throw new Error(data.error || "Gagal menambahkan ke keranjang");
            
            // Redirect ke payment page
            router.push("/payment");
        } catch (err) {
            console.error(err);
            alert(err.message);
        } finally {
            setLoading(false);
        }
    };

    if (productLoading) {
        return (
            <div className="flex h-screen w-full justify-center items-center">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
                    <p className="text-gray-600">Memuat produk...</p>
                </div>
            </div>
        );
    }

    if (error || !product) {
        return (
            <div className="flex h-screen w-full justify-center items-center">
                <div className="text-center">
                    <p className="text-red-600 text-lg">{error || "Produk tidak ditemukan"}</p>
                    <button 
                        onClick={() => router.push("/product")}
                        className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition"
                    >
                        Kembali ke Daftar Produk
                    </button>
                </div>
            </div>
        );
    }

    return (
        <>
        <Navbar textColor="text-black"/>
            <div className="min-h-screen flex flex-col items-center justify-center py-10 px-6">
                <div className="max-w-4xl w-full bg-white rounded-2xl shadow-lg overflow-hidden">
                    <div className="flex flex-col md:flex-row">
                        <div className="relative w-full md:w-1/2 h-[400px]">
                            {product.image_url ? (
                                <Image
                                    src={product.image_url.startsWith('/') || product.image_url.startsWith('http') 
                                        ? product.image_url 
                                        : `/${product.image_url}`}
                                    alt={product.nama_produk}
                                    fill
                                    className="object-cover"
                                    unoptimized
                                />
                            ) : (
                                <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                                    <span className="text-gray-400">No Image</span>
                                </div>
                            )}
                        </div>

                        <div className="p-6 md:w-1/2 flex flex-col justify-between">
                        <div>
                            <h1 className="text-3xl font-bold mb-4">{product.nama_produk}</h1>
                            <p className="text-gray-600 mb-6">{product.deskripsi || "Tidak ada deskripsi."}</p>
                            <p className="text-2xl font-semibold text-blue-600">
                            Rp {product.harga_kg.toLocaleString()} / kg
                            </p>
                            <p className="text-lg font-medium text-green-600">
                            Total: Rp {(product.harga_kg * (quantity || 0)).toLocaleString()}
                            </p>
                        </div>

                        {/* Input jumlah pembelian */}
                        <div className="flex gap-3 items-center">
                            <p className="text-gray-600">Quantity:</p>

                            <button
                            onClick={decreaseQuantity}
                            disabled={quantity <= 1}
                            className="px-3 text-2xl bg-gray-200 hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed rounded"
                            >
                            -
                            </button>

                            {/*  Input tanpa spinner + bisa dikosongkan */}
                            <input
                            type="number"
                            min="1"
                            max="1000"
                            value={quantity === null ? "" : quantity}
                            onChange={(e) => {
                                const val = e.target.value;
                                // Kalau input dikosongkan
                                if (val === "") {
                                setQuantity(null);
                                return;
                                }
                                // Ubah ke angka & validasi batas
                                const num = parseInt(val);
                                if (!isNaN(num)) {
                                if (num > 1000) setQuantity(1000);
                                else if (num < 1) setQuantity(1);
                                else setQuantity(num);
                                }
                            }}
                            onBlur={() => {
                                // Saat input keluar fokus dan kosong, set ke 1
                                if (quantity === null || quantity === "") setQuantity(1);
                            }}
                            className="w-24 text-center border border-gray-300 rounded py-2 focus:outline-none focus:ring-2 focus:ring-blue-500
                                        [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none
                                        [-moz-appearance:textfield]"
                            placeholder="0"
                            />

                            <button
                            onClick={() => {
                                if (quantity < 1000) setQuantity(quantity + 1);
                            }}
                            disabled={quantity >= 1000}
                            className="px-3 text-2xl bg-gray-200 hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed rounded"
                            >
                            +
                            </button>
                        </div>

                        <div className="flex gap-5 items-end w-full">
                            <button
                            onClick={handleAddToCart}
                            disabled={loading || !quantity}
                            className="mt-6 bg-gray-200 text-blue-800 py-2 px-8 rounded-sm border border-blue-800 transition disabled:opacity-50"
                            >
                            {loading ? "Adding..." : "Add To Cart"}
                            </button>
                            <button
                            onClick={handleOrderNow}
                            disabled={loading || !quantity}
                            className="mt-6 bg-blue-800 text-white py-2 px-8 rounded-sm hover:bg-blue-900 transition disabled:opacity-50"
                            >
                            {loading ? "Processing..." : "Order Now"}
                            </button>
                        </div>
                        <Notification
                            message={notification.show ? notification.message : ''}
                            type={notification.type}
                            onClose={() => setNotification(prev => ({ ...prev, show: false }))}
                        />
                        </div>
                    </div>
                </div>
            </div>
        <Footer/>
        </>
    );
}
