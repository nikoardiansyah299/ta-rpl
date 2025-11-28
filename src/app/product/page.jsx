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
      <div className='relative flex flex-col justify-center gap-30 h-screen bg-linear-to-t from-white to-black/20'>
        <Image src={"/product-fish/hero.jpeg"} fill alt="Hero image" className='object-cover w-full h-full' />
        <div className='absolute justify-center items-center top-2/3 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 sm:px-6 md:px-10 py-5 bg-[#ffffff] rounded-lg flex flex-col gap-4 sm:gap-6 w-11/12 sm:w-3/4 md:w-1/2 max-w-2xl'>
          <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-center'>Indonesian Marine Fish Products</h1>
          <input 
            type="text" 
            placeholder="Search products..." 
            className="w-full sm:w-5/6 md:w-4/5 p-2 sm:p-3 border border-blue-600 rounded-md outline-none focus:ring-2 focus:ring-blue-500"
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