'use client';
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import Image from "next/image";

export default function CartPage() {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [total, setTotal] = useState(0);
  const [selectedItems, setSelectedItems] = useState([]);
  const router = useRouter();
  const { data: session, status } = useSession();

  // Total harga dari item yang dipilih
  const selectedTotal = selectedItems.reduce((sum, itemId) => {
    const item = cartItems.find(cartItem => cartItem.id_keranjang === itemId);
    return sum + (item?.total_harga || 0);
  }, 0);

  // 🔐 Cek login: prefer fetch based on server-side cookie (httpOnly) or NextAuth
  // Rationale: when users login manually the auth token may be an httpOnly cookie
  // which is not accessible via js-cookie. Instead of relying on reading the
  // cookie in the client, attempt to fetch the cart and let the server decide
  // whether the request is authenticated (returns 200) or not (401).
  useEffect(() => {
    if (status === 'loading') return; // tunggu next-auth siap

    // If NextAuth authenticated, fetch immediately
    if (status === 'authenticated' && session?.user?.id_user) {
      fetchCart();
      return;
    }

    // Otherwise, try fetching the cart anyway. This allows httpOnly cookie
    // based auth (manual login) to be used because the browser will send
    // cookies when fetch uses credentials: 'include'. If the server returns
    // 401/403 we'll redirect to login.
    fetchCart();
  }, [status, session, router]);

  // Ambil isi keranjang user
  const fetchCart = async () => {
    try {
      // Include credentials so httpOnly cookies are sent for manual-login flows
      const res = await fetch("/api/cart", {
        cache: "no-store",
        credentials: 'include',
      });

      const data = await res.json();
      // If the server says the user is not authenticated, redirect to login
      if (res.status === 401 || res.status === 403) {
        alert("Silakan login terlebih dahulu!");
        router.push("/login");
        return;
      }
      if (!res.ok) throw new Error(data.error || "Gagal memuat data keranjang");

      setCartItems(data);
      const totalHarga = data.reduce(
        (sum, item) => sum + item.total_harga,
        0
      );
      setTotal(totalHarga);
    } catch (err) {
      console.error(err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Hapus item dari keranjang
  const handleRemove = async (id_keranjang) => {
    if (!confirm("Yakin mau menghapus produk ini dari keranjang?")) return;

    try {
      const res = await fetch(`/api/cart/${id_keranjang}`, {
        method: "DELETE",
        credentials: 'include',
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Gagal menghapus item");

      alert("Produk berhasil dihapus dari keranjang!");
      fetchCart();
      // Hapus dari selected items jika ada
      setSelectedItems(prev => prev.filter(id => id !== id_keranjang));
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
  };

  // Hapus multiple items yang dipilih
  const handleRemoveSelected = async () => {
    if (selectedItems.length === 0) return;
    
    if (!confirm(`Yakin mau menghapus ${selectedItems.length} produk dari keranjang?`)) return;

    try {
      // Hapus satu per satu dari backend
      const deletePromises = selectedItems.map(id_keranjang =>
        fetch(`/api/cart/${id_keranjang}`, { method: "DELETE", credentials: 'include' })
      );

      await Promise.all(deletePromises);
      alert(`${selectedItems.length} produk berhasil dihapus dari keranjang!`);
      
      // Refresh cart dan reset selected items
      fetchCart();
      setSelectedItems([]);
    } catch (err) {
      console.error(err);
      alert("Gagal menghapus beberapa produk");
    }
  };

  // Handle select/deselect individual item
  const handleSelectItem = (itemId) => {
    setSelectedItems(prev => 
      prev.includes(itemId) 
        ? prev.filter(id => id !== itemId)
        : [...prev, itemId]
    );
  };

  // Handle select/deselect all items
  const handleSelectAll = () => {
    if (selectedItems.length === cartItems.length) {
      setSelectedItems([]);
    } else {
      setSelectedItems(cartItems.map(item => item.id_keranjang));
    }
  };

  // Check if all items are selected
  const isAllSelected = cartItems.length > 0 && selectedItems.length === cartItems.length;

  // Loading state
  if (loading) {
    return (
      <div className="flex h-screen justify-center items-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Memuat keranjang...</p>
        </div>
      </div>
    );
  }

  // Error / kosong
  if (error || cartItems.length === 0) {
    return (
      <>
        <Navbar textColor="text-black" />
        <div className="flex flex-col items-center justify-center min-h-screen">
          <p className="text-lg text-gray-700">
            {error ? error : "Keranjang kamu masih kosong!"}
          </p>
          <button
            onClick={() => router.push("/product")}
            className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Lihat Produk
          </button>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar textColor="text-black" />
      <div className="min-h-screen py-10 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-lg p-6">
          <h1 className="text-3xl font-bold mb-6 text-blue-900">Keranjang Saya</h1>

          {/* Header */}
          <div className="flex items-center justify-between font-semibold text-gray-700 mb-4 px-4 py-2 bg-gray-50 rounded-lg">
            <div className="flex items-center gap-4">
              <input
                type="checkbox"
                checked={isAllSelected}
                onChange={handleSelectAll}
                className="w-5 h-5 text-blue-600 rounded focus:ring-blue-500"
              />
              <label>Select All</label>
            </div>
            <label>Image</label>
            <label>Product Name</label>
            <label>Price</label>
            <label>Quantity</label>
            <label className="mr-5">Total</label>
          </div>

          {/* Cart Items */}
          <div className="space-y-4">
            {cartItems.map((item) => (
              <div
                key={item.id_keranjang}
                className="flex items-center justify-between border border-gray-200 rounded-xl p-4 hover:shadow-md transition-shadow"
              >
                {/* Checkbox */}
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    checked={selectedItems.includes(item.id_keranjang)}
                    onChange={() => handleSelectItem(item.id_keranjang)}
                    className="w-5 h-5 text-blue-600 rounded focus:ring-blue-500"
                  />
                </div>

                {/* Product Image */}
                <div className="w-20 ml-25">
                  {item.produk?.gambar ? (
                    <Image
                      src={
                        (item.produk.gambar.toLowerCase().startsWith('/') ||
                        item.produk.gambar.toLowerCase().startsWith('http'))
                          ? item.produk.gambar.toLowerCase()
                          : `/${item.produk.gambar.toLowerCase()}`
                      }
                      alt={item.produk?.nama_produk || 'Product image'}
                      width={80}
                      height={80}
                      className="rounded-lg object-cover w-20 h-20"
                    />
                  ) : (
                    <div className="w-20 h-20 bg-gray-100 rounded-lg flex items-center justify-center">
                      <span className="text-xs text-gray-500">No Image</span>
                    </div>
                  )}
                </div>

                {/* Product Name */}
                <div className="">
                  <h2 className="text-lg font-semibold text-gray-800">
                    {item.produk?.nama_produk}
                  </h2>
                </div>

                {/* Price */}
                <div className="text-center">
                  <p className="text-gray-600 font-medium">
                    Rp {item.produk?.harga_kg?.toLocaleString() || 0} / kg
                  </p>
                </div>

                {/* Quantity */}
                <div className="text-center">
                  <p className="text-gray-700 font-semibold">
                    {item.jumlah_pembelian} kg
                  </p>
                </div>

                {/* Total Price */}
                <div className="text-center">
                  <p className="text-xl font-semibold text-blue-700">
                    Rp {item.total_harga?.toLocaleString() || 0}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Footer - Total and Actions */}
          <div className="mt-8 flex flex-col sm:flex-row justify-between items-center border-t pt-6 gap-4">
            <div className="flex items-center gap-4">
              <h2 className="text-2xl font-bold text-blue-900">
                Total Selected: Rp {selectedTotal.toLocaleString()}
              </h2>
              {selectedItems.length > 0 && (
                <span className="text-sm text-gray-600">
                  ({selectedItems.length} item{selectedItems.length > 1 ? 's' : ''} selected)
                </span>
              )}
            </div>
            
            <div className="flex gap-4">
              {selectedItems.length > 0 && (
                <button
                  onClick={handleRemoveSelected}
                  className="text-red-600 bg-red-100 border border-red-300 px-6 py-3 hover:bg-red-200 rounded-lg transition-colors font-medium"
                >
                  Delete Selected ({selectedItems.length})
                </button>
              )}
              <button
                className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                  selectedItems.length > 0
                    ? 'bg-blue-700 text-white hover:bg-blue-800'
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
                onClick={() => selectedItems.length > 0 && router.push("/payment")}
                disabled={selectedItems.length === 0}
              >
                Checkout ({selectedItems.length})
              </button>
            </div>
          </div>

          {/* Total semua item (informasi tambahan) */}
          <div className="mt-4 text-right">
            <p className="text-sm text-gray-600">
              Total all items: Rp {total.toLocaleString()}
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}