'use client';
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { FiPackage, FiTruck, FiCalendar, FiDollarSign, FiArrowRight, FiCheck, FiClock, FiX } from "react-icons/fi";

export default function HistoryPage() {
  const router = useRouter();
  const { data: session, status } = useSession();
  const [transactions, setTransactions] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [statusFilter, setStatusFilter] = useState("all");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Ambil data transaksi dari backend
  useEffect(() => {
    if (status === 'loading') return;

    const fetchTransactions = async () => {
      const isNextAuthLoggedIn = status === 'authenticated' && session?.user?.id_user;
      const res = await fetch("/api/me", {
        credentials: "include",
      });
      const data = await res.json();
      
      if (!isNextAuthLoggedIn && !data?.user?.id_user) {
        alert("Silakan login terlebih dahulu!");
        router.push("/login");
        return;
      }

      try {
        const res = await fetch("/api/transaction/history", {
          cache: "no-store",
          credentials: 'include',
        });

        const data = await res.json();
        if (!res.ok) throw new Error(data.message || data.error || "Failed to fetch data");
        
        setTransactions(data.transaksi || []);
        setFiltered(data.transaksi || []);
      } catch (err) {
        console.error(err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTransactions();
  }, [status, session, router]);

  // Filter berdasarkan status
  const handleFilter = (status) => {
    setStatusFilter(status);
    if (status === "all") {
      setFiltered(transactions);
    } else {
      setFiltered(transactions.filter((t) => t.status_transaksi === status));
    }
  };

  // Handle cancel transaction
  const handleCancel = async (id_transaksi) => {
    if (!confirm("Are you sure you want to cancel this transaction?")) return;

    try {
      const res = await fetch("/api/transaction/update", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id_transaksi, status: "dibatalkan" }),
        credentials: "include",
      });

      if (res.ok) {
        // Update state
        setTransactions((prev) =>
          prev.map((t) =>
            t.id_transaksi === id_transaksi ? { ...t, status_transaksi: "cancelled" } : t
          )
        );
        // Refresh filtered based on current filter
        setFiltered((prev) => {
          const updated = prev.map((t) =>
            t.id_transaksi === id_transaksi ? { ...t, status_transaksi: "cancelled" } : t
          );
          if (statusFilter === "all") return updated;
          return updated.filter((t) => t.status_transaksi === statusFilter);
        });
        alert("Transaction cancelled successfully");
      } else {
        const data = await res.json();
        alert(data.message || "Failed to cancel transaction");
      }
    } catch (err) {
      console.error(err);
      alert("Error cancelling transaction");
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "pending": return "bg-yellow-50 text-yellow-700 border-yellow-200";
      case "shipping": return "bg-blue-50 text-blue-700 border-blue-200";
      case "arrived": return "bg-green-50 text-green-700 border-green-200";
      case "cancelled": return "bg-red-50 text-red-700 border-red-200";
      default: return "bg-gray-50 text-gray-700 border-gray-200";
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case "pending": return <FiClock className="w-4 h-4" />;
      case "shipping": return <FiTruck className="w-4 h-4" />;
      case "arrived": return <FiCheck className="w-4 h-4" />;
      case "cancelled": return <FiX className="w-4 h-4" />;
      default: return <FiPackage className="w-4 h-4" />;
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case "pending": return "Order being processed";
      case "shipping": return "In Transit";
      case "arrived": return "Order Delivered";
      case "cancelled": return "Cancelled";
      default: return status;
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-center">
          <div className="animate-spin h-12 w-12 rounded-full border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-500 text-lg">Loading Transaction History...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-center">
          <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <FiX className="w-8 h-8 text-red-600" />
          </div>
          <p className="text-red-600 text-lg mb-4">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <>
      <Navbar textColor="text-black" />
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-8 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-3 mt-10">Transaction History</h1>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Track all your past purchases and order statuses in one place.
            </p>
          </div>

          {/* Filter Status */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {[
              { value: "all", label: "All", count: transactions.length },
              { value: "pending", label: "Pending", count: transactions.filter(t => t.status_transaksi === "pending").length },
              { value: "shipping", label: "Shipping", count: transactions.filter(t => t.status_transaksi === "shipping").length },
              { value: "arrived", label: "Arrived", count: transactions.filter(t => t.status_transaksi === "arrived").length },
              { value: "cancelled", label: "Cancelled", count: transactions.filter(t => t.status_transaksi === "cancelled").length }
            ].map((filter) => (
              <button
                key={filter.value}
                onClick={() => handleFilter(filter.value)}
                className={`px-5 py-3 rounded-xl border-2 font-medium transition-all duration-300 flex items-center gap-2 ${
                  statusFilter === filter.value
                    ? "bg-blue-600 text-white border-blue-600 shadow-lg transform scale-105"
                    : "bg-white border-gray-300 text-gray-700 hover:border-blue-400 hover:text-blue-600 hover:shadow-md"
                }`}
              >
                <span>{filter.label}</span>
                <span className={`px-2 py-1 rounded-full text-xs ${
                  statusFilter === filter.value 
                    ? "bg-white text-blue-600" 
                    : "bg-gray-100 text-gray-600"
                }`}>
                  {filter.count}
                </span>
              </button>
            ))}
          </div>

          {/* Daftar Transaksi */}
          <div className="space-y-6">
            {filtered.length === 0 ? (
              <div className="text-center py-16">
                <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FiPackage className="w-12 h-12 text-gray-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-600 mb-2">No Transaction yet</h3>
                <p className="text-gray-500 mb-6">Start purchasing to see your order details.</p>
                <button
                  onClick={() => router.push("/product")}
                  className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
                >
                  Start Purchasing
                </button>
              </div>
            ) : (
              filtered.map((transaction) => (
                <div
                  key={transaction.id_transaksi}
                  className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300"
                >
                  {/* Transaction Header */}
                  <div className="p-6 border-b border-gray-100">
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h2 className="text-xl font-bold text-gray-900">
                            Transaksi {transaction.id_transaksi}
                          </h2>
                          <span className={`px-3 py-1 rounded-full text-sm font-medium border flex items-center gap-1 ${getStatusColor(transaction.status_transaksi)}`}>
                            {getStatusIcon(transaction.status_transaksi)}
                            {getStatusText(transaction.status_transaksi)}
                          </span>
                        </div>
                        
                        <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                          <div className="flex items-center gap-2">
                            <FiCalendar className="w-4 h-4" />
                            <span>{new Date(transaction.tgl_transaksi).toLocaleDateString("en-EN", { 
                              weekday: 'long',
                              year: 'numeric',
                              month: 'long',
                              day: 'numeric',
                              hour: '2-digit',
                              minute: '2-digit'
                            })}</span>
                          </div>
                          
                          {transaction.jasa_pengirim && (
                            <div className="flex items-center gap-2">
                              <FiTruck className="w-4 h-4" />
                              <span>{transaction.jasa_pengirim.jasa_kirim}</span>
                            </div>
                          )}
                        
                        </div>
                      </div>

                      <button
                        onClick={() => router.push(`/transaction/${transaction.id_transaksi}`)}
                        className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium flex items-center gap-2 whitespace-nowrap"
                      >
                        See Details
                        <FiArrowRight className="w-4 h-4" />
                      </button>
                      {transaction.status_transaksi === "pending" && (
                        <button
                          onClick={() => handleCancel(transaction.id_transaksi)}
                          className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors font-medium flex items-center gap-2 whitespace-nowrap"
                        >
                          Cancel
                        </button>
                      )}
                    </div>
                  </div>

                  {/* Products List */}
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                      <FiPackage className="w-5 h-5" />
                      Products in this Transaction
                    </h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {transaction.detail_transaksi?.length > 0 ? (
                        transaction.detail_transaksi.map((detail, index) => (
                          <div
                            key={index}
                            className="bg-gray-50 rounded-xl p-4 border border-gray-200 hover:border-blue-300 transition-colors"
                          >
                            <div className="flex justify-between items-start mb-2">
                              <h4 className="font-semibold text-gray-900 text-sm line-clamp-2">
                                {detail.produk?.nama_produk || "Product not available"}
                              </h4>
                            </div>
                            
                            <div className="space-y-1 text-xs text-gray-600">
                              <p>Quantity: <span className="font-semibold">{detail.jumlah_kg} kg</span></p>
                              <p>Price: <span className="font-semibold">Rp {detail.produk.harga_kg?.toLocaleString("id-ID")}/kg</span></p>
                              <div className="pt-2 border-t border-gray-200">
                                <p className="font-semibold text-blue-600">
                                  Subtotal: Rp {detail.subtotal?.toLocaleString("id-ID")}
                                </p>
                              </div>
                            </div>
                          </div>
                        ))
                      ) : (
                        <div className="col-span-full text-center py-8">
                          <FiPackage className="w-12 h-12 text-gray-300 mx-auto mb-3" />
                          <p className="text-gray-500">No details on the product</p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}