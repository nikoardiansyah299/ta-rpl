'use client';

import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
<<<<<<< HEAD
import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import PackageTracking from "@/components/PackageTracking";

// animejs removed — using GSAP for the tracking-item stagger animation instead
=======
import { useState, useEffect } from "react";
>>>>>>> 64c14e1fc4133cf658d8fd5f77e222e019be7bea
import { 
  FiArrowLeft, 
  FiPackage, 
  FiTruck, 
  FiMapPin, 
  FiDollarSign,
  FiCalendar,
<<<<<<< HEAD
  FiUser,
  FiCheck,
  FiClock,
  FiNavigation,
  FiAnchor,
  FiGlobe
=======
  FiUser
>>>>>>> 64c14e1fc4133cf658d8fd5f77e222e019be7bea
} from "react-icons/fi";

export default function TransactionPage({ params }) {
  const router = useRouter();
  const { data: session, status } = useSession();
  const [transaction, setTransaction] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const transactionId = params.id;

<<<<<<< HEAD
  const pageRef = useRef(null);
  const headerRef = useRef(null);
  const cardsRef = useRef([]);

  // Add to cards ref
  const addToCardsRef = (el) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el);
    }
  };

  useEffect(() => {
    if (status === 'loading') return;

  const fetchTransactionDetail = async () => {

    const isNextAuthLoggedIn = status === 'authenticated' && session?.user?.id_user;
    const meRes = await fetch("/api/me", {
      credentials: "include",
    });
    const meData = await meRes.json();

    if (!isNextAuthLoggedIn && !meData?.user?.id_user) {
      alert("Please log in first to view transaction details!");
      setLoading(false);
      router.push("/login");
      return;
    }
    try {
    const res = await fetch(`/api/transaction/${transactionId}`, {
      cache: "no-store",
      credentials: 'include',
    });

    const data = await res.json();
        
        if (res.status === 401 || res.status === 403) {
          alert("You are not authorized to view this transaction!");
=======
  // Ambil data detail transaksi
  useEffect(() => {
    if (status === 'loading') return;

    if (!session) {
      alert("Silakan login terlebih dahulu!");
      router.push("/login");
      return;
    }

    const fetchTransactionDetail = async () => {
      try {
        const res = await fetch(`/api/transaction/${transactionId}`, {
          cache: "no-store",
          credentials: 'include',
        });

        const data = await res.json();
        
        if (res.status === 401 || res.status === 403) {
          alert("Anda tidak memiliki akses ke transaksi ini!");
>>>>>>> 64c14e1fc4133cf658d8fd5f77e222e019be7bea
          router.push("/history");
          return;
        }
        
        if (res.status === 404) {
<<<<<<< HEAD
          setError("Transaction not found");
          return;
        }

        if (!res.ok) throw new Error(data.message || data.error || "Failed to fetch transaction details");
=======
          setError("Transaksi tidak ditemukan");
          return;
        }

        if (!res.ok) throw new Error(data.message || data.error || "Gagal memuat data transaksi");
>>>>>>> 64c14e1fc4133cf658d8fd5f77e222e019be7bea
        
        setTransaction(data.transaksi);
      } catch (err) {
        console.error(err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTransactionDetail();
  }, [status, session, router, transactionId]);

<<<<<<< HEAD
  // Animations
  useEffect(() => {
    if (!loading && !error && transaction) {
      // Page entrance animation
      gsap.fromTo(pageRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }
      );

      // Header animation
      gsap.fromTo(headerRef.current,
        { opacity: 0, x: -50 },
        { opacity: 1, x: 0, duration: 0.6, delay: 0.2, ease: "back.out(1.7)" }
      );

      // Cards stagger animation
      gsap.fromTo(cardsRef.current,
        { opacity: 0, y: 40 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 0.8, 
          stagger: 0.15,
          delay: 0.4,
          ease: "power2.out"
        }
      );

      // Floating animation for tracking items (use GSAP instead of animejs)
      gsap.fromTo('.tracking-item',
        { y: -10, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, stagger: 0.2, ease: 'power1.out', delay: 0.4 }
      );
    }
  }, [loading, error, transaction]);

=======
>>>>>>> 64c14e1fc4133cf658d8fd5f77e222e019be7bea
  // Format currency
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR'
    }).format(amount);
  };

  // Format date
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('id-ID', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
<<<<<<< HEAD
      day: 'numeric'
=======
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
>>>>>>> 64c14e1fc4133cf658d8fd5f77e222e019be7bea
    });
  };

  const getStatusColor = (status) => {
    switch (status) {
<<<<<<< HEAD
      case "pending": return "bg-yellow-50 text-yellow-700 border-yellow-200";
      case "shipping": return "bg-blue-50 text-blue-700 border-blue-200";
      case "arrived": return "bg-green-50 text-green-700 border-green-200";
      case "cancelled": return "bg-red-50 text-red-700 border-red-200";
      default: return "bg-gray-50 text-gray-700 border-gray-200";
=======
      case "pending": return "bg-yellow-100 text-yellow-800 border-yellow-300";
      case "shipping": return "bg-blue-100 text-blue-800 border-blue-300";
      case "arrived": return "bg-green-100 text-green-800 border-green-300";
      case "cancelled": return "bg-red-100 text-red-800 border-red-300";
      default: return "bg-gray-100 text-gray-800 border-gray-300";
>>>>>>> 64c14e1fc4133cf658d8fd5f77e222e019be7bea
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
<<<<<<< HEAD
      case "pending": return <FiClock className="w-5 h-5" />;
      case "shipping": return <FiTruck className="w-5 h-5" />;
      case "arrived": return <FiCheck className="w-5 h-5" />;
=======
      case "pending": return <FiPackage className="w-5 h-5" />;
      case "shipping": return <FiTruck className="w-5 h-5" />;
      case "arrived": return <FiPackage className="w-5 h-5" />;
>>>>>>> 64c14e1fc4133cf658d8fd5f77e222e019be7bea
      case "cancelled": return <FiPackage className="w-5 h-5" />;
      default: return <FiPackage className="w-5 h-5" />;
    }
  };

  const getStatusText = (status) => {
    switch (status) {
<<<<<<< HEAD
      case "pending": return "Order being processed";
=======
      case "pending": return "Menunggu Pembayaran";
>>>>>>> 64c14e1fc4133cf658d8fd5f77e222e019be7bea
      case "shipping": return "Sedang Dikirim";
      case "arrived": return "Pesanan Sampai";
      case "cancelled": return "Dibatalkan";
      default: return status;
    }
  };

<<<<<<< HEAD
  // Package tracking simulation
  const getPackageTracking = (transactionDate) => {
    const orderDate = new Date(transactionDate);
    return [
      {
        date: new Date(orderDate.getTime() + 1 * 24 * 60 * 60 * 1000),
        status: 'processed',
        title: 'Order Processed',
        description: 'order is being prepared for shipment',
        icon: FiPackage,
        color: 'text-blue-600'
      },
      {
        date: new Date(orderDate.getTime() + 3 * 24 * 60 * 60 * 1000),
        status: 'shipped',
        title: 'Shipped to Indonesian Export Harbour',
        description: 'Shipment has left the local warehouse and is on its way to the export harbour',
        icon: FiNavigation,
        color: 'text-orange-600'
      },
      {
        date: new Date(orderDate.getTime() + 5 * 24 * 60 * 60 * 1000),
        status: 'transit',
        title: 'Transit in International Harbour',
        description: 'Order is in transit at the international harbour',
        icon: FiAnchor,
        color: 'text-purple-600'
      },
      {
        date: new Date(orderDate.getTime() + 8 * 24 * 60 * 60 * 1000),
        status: 'delivered',
        title: 'In route to Destination',
        description: 'Order is on the way to the final destination',
        icon: FiGlobe,
        color: 'text-green-600'
      }
    ];
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-50 py-8">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-center items-center min-h-96">
            <div className="text-center">
              <div className="animate-spin h-16 w-16 rounded-full border-b-2 border-blue-600 mx-auto mb-4"></div>
              <p className="text-gray-500 text-lg font-medium">Loading transaction details...</p>
=======
  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex justify-center items-center min-h-96">
            <div className="text-center">
              <div className="animate-spin h-12 w-12 rounded-full border-b-2 border-blue-600 mx-auto mb-4"></div>
              <p className="text-gray-500 text-lg">Memuat detail transaksi...</p>
>>>>>>> 64c14e1fc4133cf658d8fd5f77e222e019be7bea
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error || !transaction) {
    return (
<<<<<<< HEAD
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-50 py-8">
        <div className="max-w-6xl mx-auto px-4">
          <button
            onClick={() => router.back()}
            className="flex items-center text-blue-600 hover:text-blue-700 mb-6 transition-colors"
          >
            <FiArrowLeft className="w-5 h-5 mr-2" />
            Back
          </button>
          
          <div className="text-center py-16">
            <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <FiPackage className="w-10 h-10 text-red-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              {error || "Transaction Not Found"}
            </h2>
            <p className="text-gray-600 mb-6 text-lg">
              {error ? "An error has occured" : "The transaction you are looking for does not exist."}
            </p>
            <button
              onClick={() => router.push("/history")}
              className="bg-blue-600 text-white px-8 py-3 rounded-xl hover:bg-blue-700 transition-colors font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all"
            >
              See Transaction History
=======
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-4xl mx-auto px-4">
          <button
            onClick={() => router.back()}
            className="flex items-center text-blue-600 hover:text-blue-700 mb-6"
          >
            <FiArrowLeft className="w-4 h-4 mr-2" />
            Kembali
          </button>
          
          <div className="text-center py-16">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <FiPackage className="w-8 h-8 text-red-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              {error || "Transaksi tidak ditemukan"}
            </h2>
            <p className="text-gray-600 mb-6">
              {error ? "Terjadi kesalahan saat memuat data transaksi" : "Transaksi yang Anda cari tidak dapat ditemukan"}
            </p>
            <button
              onClick={() => router.push("/history")}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Lihat Riwayat Transaksi
>>>>>>> 64c14e1fc4133cf658d8fd5f77e222e019be7bea
            </button>
          </div>
        </div>
      </div>
    );
  }

  const totalProduk = transaction.detail_transaksi.reduce((sum, item) => sum + item.subtotal, 0);
  const totalAkhir = totalProduk + transaction.jasa_pengirim.harga_pengiriman;
<<<<<<< HEAD
  const packageTracking = getPackageTracking(transaction.tgl_transaksi);

  return (
    <div ref={pageRef} className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div ref={headerRef} className="flex items-center justify-between mb-8">
          <button
            onClick={() => router.back()}
            className="flex items-center text-blue-600 hover:text-blue-700 transition-colors group"
          >
            <FiArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to order History
          </button>
          
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">Order Details</h1>
            <p className="text-gray-600">ID: {transaction.id_transaksi}</p>
          </div>

          <div className={`px-6 py-3 rounded-2xl border-2 font-semibold flex items-center ${getStatusColor(transaction.status_transaksi)}`}>
            {getStatusIcon(transaction.status_transaksi)}
            <span className="ml-2">{getStatusText(transaction.status_transaksi)}</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-6">
            {/* Package Tracking */}
            <div ref={addToCardsRef}>
              <PackageTracking transactionId={transaction.id_transaksi} />
            </div>

            {/* Product Details */}
            <div ref={addToCardsRef} className="bg-white rounded-3xl shadow-xl p-8 border border-gray-200">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center">
                  <FiPackage className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Product Details</h2>
              </div>

              <div className="space-y-4">
                {transaction.detail_transaksi.map((item) => (
                  <div key={item.id_detail} className="flex items-center justify-between p-6 bg-gray-50 rounded-2xl border border-gray-200 hover:border-blue-300 transition-colors">
                    <div className="flex items-center space-x-4 flex-1">
                      {item.produk.gambar ? (
                        <img
                          src={item.produk.gambar.startsWith('/') || item.produk.gambar.startsWith('http') 
                                ? item.produk.gambar 
                                : `/${item.produk.gambar}`}
                          alt={item.produk.nama_produk}
                          className="w-20 h-20 object-cover rounded-xl shadow-md"
                        />
                      ) : (
                        <div className="w-20 h-20 bg-gradient-to-br from-gray-200 to-gray-300 rounded-xl flex items-center justify-center shadow-md">
                          <FiPackage className="w-8 h-8 text-gray-400" />
                        </div>
                      )}
                      <div className="flex-1">
                        <h3 className="font-bold text-gray-900 text-lg mb-1">{item.produk.nama_produk}</h3>
                        <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
                          <div>
                            <span className="font-medium">Price/kg:</span>
                            <p className="text-blue-600 font-semibold text-lg">
                              {formatCurrency(item.produk.harga_kg)}
                            </p>
                          </div>
                          <div>
                            <span className="font-medium">Quantity:</span>
                            <p className="font-semibold text-gray-900">{item.jumlah_kg} kg</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-green-600">
                        {formatCurrency(item.subtotal)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Order Information */}
            <div ref={addToCardsRef} className="bg-white rounded-3xl shadow-xl p-6 border border-gray-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center">
                  <FiCalendar className="w-5 h-5 text-white" />
                </div>
                <h2 className="text-xl font-bold text-gray-900">Order Informations</h2>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                  <span className="text-gray-600">Transaction ID</span>
                  <span className="font-semibold text-gray-900">{transaction.id_transaksi}</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                  <span className="text-gray-600">Date</span>
                  <span className="font-semibold text-gray-900">
                    {new Date(transaction.tgl_transaksi).toLocaleDateString('en-US', {
                      weekday: 'long',
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                  <span className="text-gray-600">Payment Method</span>
                  <span className="font-semibold text-gray-900 capitalize">
                    {transaction.metode_transaksi || 'Transfer Bank'}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Status</span>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(transaction.status_transaksi)}`}>
                    {getStatusText(transaction.status_transaksi)}
                  </span>
                </div>
              </div>
            </div>

            {/* Shipping Information */}
            <div ref={addToCardsRef} className="bg-white rounded-3xl shadow-xl p-6 border border-gray-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-600 rounded-full flex items-center justify-center">
                  <FiTruck className="w-5 h-5 text-white" />
                </div>
                <h2 className="text-xl font-bold text-gray-900">Shipment</h2>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Courrier</span>
                  <span className="font-semibold text-gray-900">{transaction.jasa_pengirim.jasa_kirim}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Shipping fee</span>
                  <span className="font-semibold text-blue-600">
                    {formatCurrency(transaction.jasa_pengirim.harga_pengiriman)}
                  </span>
                </div>
                {session?.user?.alamat && (
                  <div className="pt-3 border-t border-gray-200">
                    <div className="flex items-start gap-2">
                      <FiMapPin className="w-4 h-4 text-gray-400 mt-1 flex-shrink-0" />
                      <div>
                        <p className="text-sm text-gray-600 mb-1">Shipment Address</p>
                        <p className="text-sm font-medium text-gray-900">{session.user.alamat}</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Payment Summary */}
            <div ref={addToCardsRef} className="bg-white rounded-3xl shadow-xl p-6 border border-gray-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-teal-600 rounded-full flex items-center justify-center">
                  <FiDollarSign className="w-5 h-5 text-white" />
                </div>
                <h2 className="text-xl font-bold text-gray-900">Payment Summary</h2>
              </div>

              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Subtotal Product</span>
                  <span className="font-medium">{formatCurrency(totalProduk)}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Shipping fee</span>
                  <span className="font-medium">{formatCurrency(transaction.jasa_pengirim.harga_pengiriman)}</span>
                </div>
                <div className="border-t border-gray-200 pt-3">
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold text-gray-900">Total</span>
                    <span className="text-2xl font-bold text-green-600">
                      {formatCurrency(totalAkhir)}
                    </span>
                  </div>
                </div>
              </div>
=======

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <button
            onClick={() => router.back()}
            className="flex items-center text-blue-600 hover:text-blue-700"
          >
            <FiArrowLeft className="w-4 h-4 mr-2" />
            Kembali
          </button>
          <h1 className="text-2xl font-bold text-gray-900">Detail Transaksi</h1>
          <div className={`px-4 py-2 rounded-full border ${getStatusColor(transaction.status_transaksi)} flex items-center`}>
            {getStatusIcon(transaction.status_transaksi)}
            <span className="ml-2 font-medium">{getStatusText(transaction.status_transaksi)}</span>
          </div>
        </div>

        {/* Info Transaksi */}
        <div className="bg-white rounded-lg shadow-sm border p-6 mb-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
            <FiCalendar className="w-5 h-5 mr-2 text-blue-600" />
            Informasi Transaksi
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-gray-600">ID Transaksi</p>
              <p className="font-medium">#{transaction.id_transaksi}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Tanggal Transaksi</p>
              <p className="font-medium">{formatDate(transaction.tgl_transaksi)}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Metode Pembayaran</p>
              <p className="font-medium capitalize">{transaction.metode_transaksi || '-'}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Status</p>
              <p className="font-medium">{getStatusText(transaction.status_transaksi)}</p>
            </div>
          </div>
        </div>

        {/* Produk yang Dibeli */}
        <div className="bg-white rounded-lg shadow-sm border p-6 mb-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
            <FiPackage className="w-5 h-5 mr-2 text-green-600" />
            Produk yang Dibeli
          </h2>
          <div className="space-y-4">
            {transaction.detail_transaksi.map((item) => (
              <div key={item.id_detail} className="flex items-center justify-between py-3 border-b">
                <div className="flex items-center space-x-4">
                  {item.produk.gambar ? (
                    <img
                      src={item.produk.gambar}
                      alt={item.produk.nama_produk}
                      className="w-16 h-16 object-cover rounded-lg"
                    />
                  ) : (
                    <div className="w-16 h-16 bg-gray-200 rounded-lg flex items-center justify-center">
                      <FiPackage className="w-6 h-6 text-gray-400" />
                    </div>
                  )}
                  <div>
                    <h3 className="font-medium text-gray-900">{item.produk.nama_produk}</h3>
                    <p className="text-sm text-gray-600">{item.jumlah_kg} kg × {formatCurrency(item.produk.harga_kg)}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-gray-900">{formatCurrency(item.subtotal)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Info Pengiriman */}
        <div className="bg-white rounded-lg shadow-sm border p-6 mb-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
            <FiTruck className="w-5 h-5 mr-2 text-orange-600" />
            Informasi Pengiriman
          </h2>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-gray-600">Jasa Pengiriman</span>
              <span className="font-medium">{transaction.jasa_pengirim.jasa_kirim}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Biaya Pengiriman</span>
              <span className="font-medium">{formatCurrency(transaction.jasa_pengirim.harga_pengiriman)}</span>
            </div>
            {session?.user?.alamat && (
              <div className="flex items-start justify-between pt-3 border-t">
                <span className="text-gray-600 flex items-start">
                  <FiMapPin className="w-4 h-4 mr-2 mt-1 flex-shrink-0" />
                  Alamat Pengiriman
                </span>
                <span className="font-medium text-right max-w-xs">{session.user.alamat}</span>
              </div>
            )}
          </div>
        </div>

        {/* Ringkasan Pembayaran */}
        <div className="bg-white rounded-lg shadow-sm border p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
            <FiDollarSign className="w-5 h-5 mr-2 text-green-600" />
            Ringkasan Pembayaran
          </h2>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-gray-600">Total Harga Produk</span>
              <span>{formatCurrency(totalProduk)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Biaya Pengiriman</span>
              <span>{formatCurrency(transaction.jasa_pengirim.harga_pengiriman)}</span>
            </div>
            <div className="flex justify-between text-lg font-bold border-t pt-2">
              <span>Total Pembayaran</span>
              <span className="text-green-600">{formatCurrency(totalAkhir)}</span>
>>>>>>> 64c14e1fc4133cf658d8fd5f77e222e019be7bea
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}