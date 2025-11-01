'use client';
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

export default function HistoryPage() {
  const router = useRouter();
  const { data: session, status } = useSession();
  const [transactions, setTransactions] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [produk, setProduk] = useState([]);
  const [statusFilter, setStatusFilter] = useState("semua");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Ambil data transaksi dari backend
  useEffect(() => {
    if (status === 'loading') return; // tunggu next-auth siap

    const fetchTransactions = async () => {
      // Cek apakah user sudah login (NextAuth atau JWT)
      const isNextAuthLoggedIn = status === 'authenticated' && session?.user?.id_user;
      const jwtToken = Cookies.get("access_token");
      
      if (!isNextAuthLoggedIn && !jwtToken) {
        alert("Silakan login terlebih dahulu!");
        router.push("/login");
        return;
      }

      try {
        const res = await fetch("/api/transaction/history", {
          cache: "no-store",
        });

        const data = await res.json();
        if (!res.ok) throw new Error(data.message || data.error || "Gagal memuat data");
        setTransactions(data.transaksi || []);
        setFiltered(data.transaksi || []);
        setProduk(data.produk || []);
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
    if (status === "all") setFiltered(transactions);
    else setFiltered(transactions.filter((t) => t.status_transaksi === status));
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

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-center">
          <div className="animate-spin h-10 w-10 rounded-full border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-500">Memuat riwayat transaksi...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-center text-red-600">
          <p>{error}</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <Navbar textColor="text-black" />
      <div className="min-h-screen bg-gray-50 py-10 px-6">
        <h1 className="text-3xl font-bold text-center mb-8">Riwayat Transaksi</h1>

        {/* Bar Filter Status */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {["all", "pending", "shipping", "arrived", "cancelled"].map((status) => (
            <button
              key={status}
              onClick={() => handleFilter(status)}
              className={`px-4 py-2 rounded-lg border transition ${
                statusFilter === status
                  ? "bg-blue-600 text-white border-blue-600"
                  : "bg-white border-gray-300 text-gray-700 hover:bg-blue-100"
              }`}
            >
              {status === "all" ? "All" :
               status === "pending" ? "Pending" :
               status === "shipping" ? "Shipping" :
               status === "arrived" ? "Arrived" : "Cancelled"}
            </button>
          ))}
        </div>

        {/* Daftar Transaksi */}
        <div className="max-w-4xl mx-auto space-y-4">
          {filtered.length === 0 ? (
            <p className="text-center text-gray-500">Belum ada transaksi.</p>
          ) : (
            filtered.map((trx) => (
              <div
                key={trx.id_transaksi}
                className="bg-white p-5 rounded-lg shadow border border-gray-200"
              >
                {/* Header Transaksi */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-4">
                  <div className="w-full md:w-auto">
                    <h2 className="text-lg font-semibold mb-1">Transaksi #{trx.id_transaksi}</h2>
                    <p className="text-sm text-gray-500">
                      Tanggal: {new Date(trx.tgl_transaksi).toLocaleString("id-ID")}
                    </p>
                    <p className="text-sm text-gray-600 mt-1">
                      Pengiriman: {trx.jasa_pengirim?.jasa_kirim || "Tidak ada"}
                    </p>
                  </div>

                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium border ${getStatusColor(
                      trx.status_transaksi
                    )}`}
                  >
                    {trx.status_transaksi === "pending"
                      ? "Pending"
                      : trx.status_transaksi === "shipping"
                      ? "Shipping"
                      : trx.status_transaksi === "Arrived"
                      ? "Arrived"
                      : "Cancelled"}
                  </span>
                </div>

                {/* Detail Produk */}
                <div className="border-t pt-4 mt-4">
                  <h3 className="text-sm font-semibold text-gray-700 mb-3">Produk yang Tersedia:</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                    {produk.length > 0 ? (
                      produk.map((item) => (
                        <div
                          key={item.id_produk}
                          className="bg-gray-50 p-3 rounded-lg border border-gray-200 hover:shadow-md transition"
                        >
                          <h4 className="font-medium text-gray-800 text-sm mb-1">
                            {item.nama_produk}
                          </h4>
                          <p className="text-xs text-gray-600 mb-2">
                            {item.deskripsi ? item.deskripsi.substring(0, 50) + "..." : "Tidak ada deskripsi"}
                          </p>
                          <div className="flex justify-between items-center">
                            <span className="text-sm font-semibold text-blue-600">
                              Rp {item.harga_kg.toLocaleString("id-ID")}/kg
                            </span>
                          </div>
                        </div>
                      ))
                    ) : (
                      <p className="text-sm text-gray-400 col-span-full">Tidak ada produk tersedia</p>
                    )}
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}
