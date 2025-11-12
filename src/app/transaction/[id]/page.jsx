'use client';

import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { useState, useEffect } from "react";
import { 
  FiArrowLeft, 
  FiPackage, 
  FiTruck, 
  FiMapPin, 
  FiDollarSign,
  FiCalendar,
  FiUser
} from "react-icons/fi";

export default function TransactionPage({ params }) {
  const router = useRouter();
  const { data: session, status } = useSession();
  const [transaction, setTransaction] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const transactionId = params.id;

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
          router.push("/history");
          return;
        }
        
        if (res.status === 404) {
          setError("Transaksi tidak ditemukan");
          return;
        }

        if (!res.ok) throw new Error(data.message || data.error || "Gagal memuat data transaksi");
        
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
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "pending": return "bg-yellow-100 text-yellow-800 border-yellow-300";
      case "shipping": return "bg-blue-100 text-blue-800 border-blue-300";
      case "arrived": return "bg-green-100 text-green-800 border-green-300";
      case "cancelled": return "bg-red-100 text-red-800 border-red-300";
      default: return "bg-gray-100 text-gray-800 border-gray-300";
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case "pending": return <FiPackage className="w-5 h-5" />;
      case "shipping": return <FiTruck className="w-5 h-5" />;
      case "arrived": return <FiPackage className="w-5 h-5" />;
      case "cancelled": return <FiPackage className="w-5 h-5" />;
      default: return <FiPackage className="w-5 h-5" />;
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case "pending": return "Menunggu Pembayaran";
      case "shipping": return "Sedang Dikirim";
      case "arrived": return "Pesanan Sampai";
      case "cancelled": return "Dibatalkan";
      default: return status;
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex justify-center items-center min-h-96">
            <div className="text-center">
              <div className="animate-spin h-12 w-12 rounded-full border-b-2 border-blue-600 mx-auto mb-4"></div>
              <p className="text-gray-500 text-lg">Memuat detail transaksi...</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error || !transaction) {
    return (
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
            </button>
          </div>
        </div>
      </div>
    );
  }

  const totalProduk = transaction.detail_transaksi.reduce((sum, item) => sum + item.subtotal, 0);
  const totalAkhir = totalProduk + transaction.jasa_pengirim.harga_pengiriman;

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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}