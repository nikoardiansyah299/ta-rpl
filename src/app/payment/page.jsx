'use client';
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { FiTruck, FiCreditCard, FiMapPin, FiPackage, FiCheck, FiArrowRight } from "react-icons/fi";
import { CiBank } from "react-icons/ci";
import { FaCcPaypal } from "react-icons/fa";

export default function PaymentPage() {
  const [cartItems, setCartItems] = useState([]);
  const [jasaList, setJasaList] = useState([]);
  const [selectedJasa, setSelectedJasa] = useState("");
  const [metode, setMetode] = useState("");
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);
  const [userAlamat, setUserAlamat] = useState(null);
  const [loadingAlamat, setLoadingAlamat] = useState(true);
  const router = useRouter();
  const { data: session, status } = useSession();

  useEffect(() => {
    if (status === 'loading') return;

<<<<<<< HEAD
    const init = async () => {
      try {
        const isNextAuthLoggedIn = status === 'authenticated' && session?.user?.id_user;
        const res = await fetch("/api/me", {
          credentials: "include"
        });
        const data = await res.json();

        if (!isNextAuthLoggedIn && !data?.user?.id_user) {
          alert("Please log in first!");
          router.push("/login");
          return;
        }

        // Load data (can run concurrently)
        await Promise.all([fetchCart(), fetchJasa(), fetchUserAlamat()]);
      } catch (err) {
        console.error('Error initializing payment page:', err);
      }
    };

    init();
=======
    // Do not rely on client-readable JWT; attempt to fetch and let server
    // validate httpOnly cookie (if present). fetchXxx will handle 401/403.
    fetchCart();
    fetchJasa();
    fetchUserAlamat();
>>>>>>> 64c14e1fc4133cf658d8fd5f77e222e019be7bea
  }, [status, session, router]);

  const fetchCart = async () => {
    const res = await fetch("/api/cart", { credentials: 'include' });
    const data = await res.json();
<<<<<<< HEAD
    if (!res.ok) return alert(data.error || "Failed to load cart items");
=======
    if (res.status === 401 || res.status === 403) {
      alert("Silakan login terlebih dahulu!");
      router.push("/login");
      return;
    }
    if (!res.ok) return alert(data.error || "Gagal memuat data keranjang");
>>>>>>> 64c14e1fc4133cf658d8fd5f77e222e019be7bea

    setCartItems(data);
    const totalHarga = data.reduce((sum, item) => sum + item.total_harga, 0);
    setTotal(totalHarga);
  };

  const fetchJasa = async () => {
    const res = await fetch("/api/shipping_service", { credentials: 'include' });
    const data = await res.json();
<<<<<<< HEAD
    if (!res.ok) return alert("Failed to load shipping services");
=======
    if (res.status === 401 || res.status === 403) {
      alert("Silakan login terlebih dahulu!");
      router.push("/login");
      return;
    }
    if (!res.ok) return alert("Gagal memuat data jasa pengiriman");
>>>>>>> 64c14e1fc4133cf658d8fd5f77e222e019be7bea
    setJasaList(data);
  };

  const fetchUserAlamat = async () => {
    setLoadingAlamat(true);
    try {
      const res = await fetch("/api/me", { credentials: 'include' });
      const data = await res.json();
      if (res.status === 401 || res.status === 403) {
        alert("Silakan login terlebih dahulu!");
        router.push("/login");
        return;
      }
      if (res.ok && data.user) {
        setUserAlamat(data.user.alamat || null);
      }
    } catch (err) {
      console.error("Error fetching user address:", err);
    } finally {
      setLoadingAlamat(false);
    }
  };

  const handlePayment = async () => {
    if (!metode) return alert("Chose a payment option!");
    if (!selectedJasa) return alert("Chose a shipping service!");

    setLoading(true);
    try {
      const res = await fetch("/api/payment", {
        method: "POST",
        credentials: 'include',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id_pengiriman: selectedJasa, metode }),
      });

      const data = await res.json();
      if (res.status === 401 || res.status === 403) {
        alert("Silakan login terlebih dahulu!");
        router.push("/login");
        return;
      }
      if (!res.ok) {
        throw new Error(data.error || data.details || "Payment failed");
      }
      alert("Transaction successful!");
      router.push("/history");
    } catch (err) {
      console.error("Payment error:", err);
      alert(err.message || "An error had occurred during payment");
    } finally {
      setLoading(false);
    }
  };

  const ongkir = jasaList.find((j) => j.id_pengiriman == selectedJasa)?.harga_pengiriman || 0;
  const grandTotal = total + ongkir;

  const paymentMethods = [
    { value: "transfer_bank", label: "Transfer Bank", icon: <CiBank/> },
    { value: "Visa", label: "Visa Debit Card", icon: <FiCreditCard/> },
    { value: "Paypal", label: "Paypal", icon: <FaCcPaypal/> }
  ];

  return (
    <>
      <Navbar textColor="text-black" />
      <div className="min-h-screen py-10 px-4 sm:px-6 bg-gradient-to-br from-blue-50 to-gray-50">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8 my-15">
            <h1 className="text-4xl font-bold text-gray-900 mb-3">Payment Checkout</h1>
            <p className="text-gray-600 text-lg">Fill in informations to complete your order</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Order Details */}
            <div className="lg:col-span-2 space-y-6">
              {/* Alamat Pengiriman */}
              <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <FiMapPin className="w-5 h-5 text-blue-600" />
                  </div>
                  <h2 className="text-xl font-bold text-gray-900">Delivery Address</h2>
                </div>
                {loadingAlamat ? (
                  <div className="flex items-center gap-3 py-4">
                    <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-blue-600"></div>
                    <p className="text-gray-500">Loading Address...</p>
                  </div>
                ) : userAlamat ? (
                  <div className="bg-blue-50 rounded-xl p-4 border border-blue-200">
                    {typeof userAlamat === 'object' && userAlamat.negara ? (
                      <div className="space-y-1">
                        <p className="text-gray-800 font-medium">{userAlamat.jalan || ""}</p>
                        <p className="text-gray-700">{userAlamat.kota || ""}, {userAlamat.negara || ""}</p>
                        {userAlamat.detail && (
                          <p className="text-sm text-gray-600 mt-2">{userAlamat.detail}</p>
                        )}
                      </div>
                    ) : typeof userAlamat === 'string' ? (
                      (() => {
                        try {
                          const parsed = JSON.parse(userAlamat);
                          return (
                            <div className="space-y-1">
                              <p className="text-gray-800 font-medium">{parsed.jalan || ""}</p>
                              <p className="text-gray-700">{parsed.kota || ""}, {parsed.negara || ""}</p>
                              {parsed.detail && (
                                <p className="text-sm text-gray-600 mt-2">{parsed.detail}</p>
                              )}
                            </div>
                          );
                        } catch (e) {
                          return <p className="text-gray-800 font-medium">{userAlamat}</p>;
                        }
                      })()
                    ) : (
                      <p className="text-gray-800 font-medium">{String(userAlamat)}</p>
                    )}
                  </div>
                ) : (
                  <div className="text-center py-6">
                    <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <FiMapPin className="w-8 h-8 text-gray-400" />
                    </div>
                    <p className="text-gray-500 mb-3">No address registered yet</p>
                    <button
                      onClick={() => router.push("/profile")}
                      className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium"
                    >
                      Add Address to Profile
                    </button>
                  </div>
                )}
              </div>

              {/* Produk yang Dipesan */}
              <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <FiPackage className="w-5 h-5 text-green-600" />
                  </div>
                  <h2 className="text-xl font-bold text-gray-900">Ordered Products</h2>
                </div>
                <div className="space-y-4">
                  {cartItems.map((item) => (
                    <div key={item.id_keranjang} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border border-gray-200">
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900">{item.produk?.nama_produk}</h3>
                        <p className="text-sm text-gray-600">{item.jumlah_pembelian} kg × Rp {item.produk?.harga_kg?.toLocaleString()}</p>
                      </div>
                      <p className="font-bold text-blue-700 text-lg">
                        Rp {item.total_harga.toLocaleString()}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Jasa Pengiriman */}
              <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                    <FiTruck className="w-5 h-5 text-orange-600" />
                  </div>
                  <h2 className="text-xl font-bold text-gray-900">Shipping Services</h2>
                </div>
                <select
                  className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200 bg-white"
                  value={selectedJasa}
                  onChange={(e) => setSelectedJasa(e.target.value)}
                >
                  <option value="">-- Choice Shipping Services --</option>
                  {jasaList.map((j) => (
                    <option key={j.id_pengiriman} value={j.id_pengiriman}>
                      {j.jasa_kirim} - Rp {j.harga_pengiriman.toLocaleString()}
                    </option>
                  ))}
                </select>
              </div>

              {/* Metode Pembayaran */}
              <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                    <FiCreditCard className="w-5 h-5 text-purple-600" />
                  </div>
                  <h2 className="text-xl font-bold text-gray-900">Payment Method</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  {paymentMethods.map((method) => (
                    <button
                      key={method.value}
                      onClick={() => setMetode(method.value)}
                      className={`p-4 border-2 rounded-xl text-left transition-all duration-200 ${
                        metode === method.value
                          ? 'border-blue-500 bg-blue-50 ring-2 ring-blue-200'
                          : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">{method.icon}</span>
                        <span className="font-medium text-gray-900">{method.label}</span>
                      </div>
                      {metode === method.value && (
                        <div className="flex items-center gap-1 mt-2 text-blue-600">
                          <FiCheck className="w-4 h-4" />
                          <span className="text-sm font-medium">Selected</span>
                        </div>
                      )}
                    </button>
                  ))}
                </div>

                {/* Form Pembayaran berdasarkan Metode yang Dipilih */}
                {metode && (
                  <div className="mt-6 p-6 bg-gray-50 rounded-xl border-2 border-blue-200">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Payment Details</h3>
                    
                    {/* Form Transfer Bank */}
                    {metode === "transfer_bank" && (
                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Bank Name
                          </label>
                          <select className="w-full border-2 border-gray-300 rounded-lg px-4 py-3 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all bg-white">
                            <option value="">-- Select Bank --</option>
                            <option value="bca">Bank Central Asia (BCA)</option>
                            <option value="mandiri">Bank Mandiri</option>
                            <option value="bni">Bank Negara Indonesia (BNI)</option>
                            <option value="bri">Bank Rakyat Indonesia (BRI)</option>
                            <option value="cimb">CIMB Niaga</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Account Number
                          </label>
                          <input
                            type="text"
                            placeholder="Enter your bank account number"
                            className="w-full border-2 border-gray-300 rounded-lg px-4 py-3 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all bg-white"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Account Owner Name
                          </label>
                          <input
                            type="text"
                            placeholder="Name in bank account"
                            className="w-full border-2 border-gray-300 rounded-lg px-4 py-3 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all bg-white"
                          />
                        </div>
                        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                          <p className="text-sm text-blue-700">
                            <strong>Note:</strong> after choosing to transfer, please transfer the full order amount into the disclosed account number.
                          </p>
                        </div>
                      </div>
                    )}

                    {/* Form Visa Debit Card */}
                    {metode === "Visa" && (
                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Debit Card Number
                          </label>
                          <input
                            type="text"
                            placeholder="1234 5678 9012 3456"
                            maxLength="19"
                            className="w-full border-2 border-gray-300 rounded-lg px-4 py-3 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all bg-white"
                            onInput={(e) => {
                              let value = e.target.value.replace(/\s/g, '').replace(/\D/g, '');
                              let formattedValue = value.match(/.{1,4}/g)?.join(' ') || value;
                              e.target.value = formattedValue;
                            }}
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Name on Card
                          </label>
                          <input
                            type="text"
                            placeholder="Name as it appears on card"
                            className="w-full border-2 border-gray-300 rounded-lg px-4 py-3 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all bg-white"
                          />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              Expiration Date
                            </label>
                            <input
                              type="text"
                              placeholder="MM/YY"
                              maxLength="5"
                              className="w-full border-2 border-gray-300 rounded-lg px-4 py-3 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all bg-white"
                              onInput={(e) => {
                                let value = e.target.value.replace(/\D/g, '');
                                if (value.length >= 2) {
                                  value = value.substring(0, 2) + '/' + value.substring(2, 4);
                                }
                                e.target.value = value;
                              }}
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              CVV
                            </label>
                            <input
                              type="text"
                              placeholder="123"
                              maxLength="3"
                              className="w-full border-2 border-gray-300 rounded-lg px-4 py-3 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all bg-white"
                              onInput={(e) => {
                                e.target.value = e.target.value.replace(/\D/g, '').substring(0, 3);
                              }}
                            />
                          </div>
                        </div>
                        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                          <p className="text-sm text-blue-700">
                            <strong>Security:</strong> Your bank account information is safe and not stored.
                          </p>
                        </div>
                      </div>
                    )}

                    {/* Form PayPal */}
                    {metode === "Paypal" && (
                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Email PayPal
                          </label>
                          <input
                            type="email"
                            placeholder="email@paypal.com"
                            className="w-full border-2 border-gray-300 rounded-lg px-4 py-3 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all bg-white"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Password PayPal
                          </label>
                          <input
                            type="password"
                            placeholder="Enter your PayPal password"
                            className="w-full border-2 border-gray-300 rounded-lg px-4 py-3 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all bg-white"
                          />
                        </div>
                        <div className="flex items-center gap-2">
                          <input
                            type="checkbox"
                            id="paypal-save"
                            className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                          />
                          <label htmlFor="paypal-save" className="text-sm text-gray-700">
                            Safe this info for future payments
                          </label>
                        </div>
                        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                          <p className="text-sm text-blue-700">
                            <strong>Information:</strong> You are directed to Paypal Payment app to complete the order.
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>

            {/* Right Column - Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 sticky top-12">
                <h2 className="text-xl font-bold text-gray-900 mb-6 pb-4 border-b border-gray-200">Order Summary</h2>
                
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Subtotal ({cartItems.length} items)</span>
                    <span className="font-medium text-gray-900">Rp {total.toLocaleString()}</span>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Shipping Costs</span>
                    <span className="font-medium text-gray-900">
                      {selectedJasa ? `Rp ${ongkir.toLocaleString()}` : '-'}
                    </span>
                  </div>

                  {selectedJasa && (
                    <div className="bg-blue-50 rounded-lg p-3 border border-blue-200">
                      <p className="text-sm text-blue-700 font-medium">
                        {jasaList.find((j) => j.id_pengiriman == selectedJasa)?.jasa_kirim}
                      </p>
                    </div>
                  )}
                </div>

                <div className="border-t border-gray-200 pt-4 mb-6">
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold text-gray-900">Total Payment</span>
                    <span className="text-2xl font-bold text-blue-700">
                      Rp {grandTotal.toLocaleString()}
                    </span>
                  </div>
                </div>

                <button
                  onClick={handlePayment}
                  disabled={loading || !metode || !selectedJasa}
                  className={`w-full py-4 px-6 rounded-xl font-bold text-lg transition-all duration-300 flex items-center justify-center gap-2 ${
                    loading || !metode || !selectedJasa
                      ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                      : 'bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-700 hover:to-blue-800 transform hover:scale-105 shadow-lg hover:shadow-xl'
                  }`}
                >
                  {loading ? (
                    <>
                      <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white"></div>
                      Processing Payments...
                    </>
                  ) : (
                    <>
                      Pay Now
                      <FiArrowRight className="w-5 h-5" />
                    </>
                  )}
                </button>

                <div className="mt-4 text-center">
                  <p className="text-xs text-gray-500">
                    By clicking “Pay Now,” you agree to the applicable terms and conditions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}