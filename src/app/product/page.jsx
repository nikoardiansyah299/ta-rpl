'use client'
import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProductCard from "@/components/ProductCard";

export default function ProductPage() {
  const [produk, setProduk] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [loading, setLoading] = useState(true);

  const categories = [
    { key: "all", label: "Semua" },
    { key: "ikan", label: "Ikan" },
    { key: "kerang", label: "Kerang" },
    { key: "kepiting", label: "Kepiting" },
  ];
  const categoryImages = {
    ikan: "/category-media/fish.jpg",
    kerang: "/category-media/shrimps.webp",
    kepiting: "/category-media/crabs.png",
  };

  useEffect(() => {
    async function fetchProduk() {
      setLoading(true);
      try {
        // Kalau kategori = "all", ambil semua produk
        const url =
          selectedCategory === "all"
            ? `/api/product`
            : `/api/product?kategori=${selectedCategory}`;
        
        console.log("Fetching URL:", url);
        const res = await fetch(url);
        const data = await res.json();
        setProduk(data);
      } catch (error) {
        console.error("Gagal fetch produk:", error);
      }
      setLoading(false);
    }
    fetchProduk();
  }, [selectedCategory]);

  return (
    <div>
      <Navbar textColor='text-black'/>
      <div className='flex flex-col justify-end gap-30 h-screen bg-gradient-to-t from-white to-black/20'>
        <div className='justify-center items-start flex flex-col gap-6'>
          <h1 className='text-5xl font-semibold ml-20'>Indonesian Marine Fish Products</h1>
          <input type="text" placeholder="Search products..." className="w-1/2 p-2 border border-gray-300 ml-20 rounded-md mb-4" />
        </div>

        <div className="flex justify-center gap-8 pb-2">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setSelectedCategory(cat.key)}
              className={`pb-2 text-xl font-medium transition-all relative
                ${selectedCategory === cat.key ? "text-blue-600" : "text-gray-500 hover:text-gray-700"}
                `}
            >
              {cat.label}
              {selectedCategory === cat.key && (
                <span className="absolute left-0 bottom-0 w-full h-[3px] bg-blue-600 rounded-t-md"></span>
              )}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-3 gap-8 px-10 py-10">
        {loading ? (
          <p className="col-span-3 text-center text-gray-500">Loading products...</p>
        ) : produk.length > 0 ? (
          produk.map((prod) => <ProductCard key={prod.id_produk} product={prod} />)
        ) : (
          <p className="col-span-3 text-center text-gray-500">
            Tidak ada produk di kategori ini.
          </p>
        )}
      </div>
      <Footer/>
    </div>
  )
}