'use client'
import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProductCard from "@/components/ProductCard";
import Image from 'next/image';

export default function ProductPage() {
  const [produk, setProduk] = useState([]);
  const [filteredProduk, setFilteredProduk] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  // Effect untuk filter produk berdasarkan pencarian
  useEffect(() => {
    if (!searchQuery.trim()) {
      setFilteredProduk(produk);
      return;
    }

    const query = searchQuery.toLowerCase();
    const filtered = produk.filter((prod) =>
      prod.nama_produk.toLowerCase().includes(query) ||
      prod.kategori?.nama_kategori.toLowerCase().includes(query)
    );
    setFilteredProduk(filtered);
  }, [searchQuery, produk]);

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
      <Navbar textColor='text-white'/>
      <div className='relative flex flex-col justify-center gap-30 h-screen bg-gradient-to-t from-white to-black/20'>
        <Image src={"/product-fish/hero.jpeg"} fill alt="Hero image" className='object-cover w-full h-full' />
        <div className='absolute justify-center items-center top-1/2 left-1/4 px-10 py-5 bg-[#ebeff0]/90 rounded-lg m-auto flex flex-col gap-6'>
          <h1 className='text-5xl font-semibold '>Indonesian Marine Fish Products</h1>
          <input 
            type="text" 
            placeholder="Search products..." 
            className="w-1/2 p-2 border border-blue-600 rounded-md mb-4 outline-none"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-10 py-10">
        {loading ? (
          <p className="col-span-3 text-center text-gray-500">Loading products...</p>
        ) : filteredProduk.length > 0 ? (
          filteredProduk.map((prod) => <ProductCard key={prod.id_produk} product={prod} />)
        ) : (
          <p className="col-span-3 text-center text-gray-500">
            No Product Found.
          </p>
        )}
      </div>
      <Footer/>
    </div>
  )
}