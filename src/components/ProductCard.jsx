import Image from "next/image";
import Link from "next/link";

export default function ProductCard({ product }) {
  
  return (
    <Link href={`/product/${product.id_produk}`}>
      <div className="group relative bg-white rounded-2xl border border-gray-100 p-6 shadow-sm hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
        {/* Background Effect on Hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        {/* Image Container */}
        <div className="relative mb-4 overflow-hidden rounded-xl">
          {product.image_url ? (
            <Image
              src={product.image_url.startsWith('/') || product.image_url.startsWith('http') ? product.image_url : `/${product.image_url}`}
              alt={product.nama_produk}
              width={300}
              height={200}
              className="rounded-xl object-cover w-full h-48 group-hover:scale-105 transition-transform duration-500"
            />
          ) : (
            <div className="w-full h-48 bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl flex items-center justify-center group-hover:from-gray-200 group-hover:to-gray-300 transition-all duration-300">
              <div className="text-center">
                <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center mx-auto mb-2">
                  <span className="text-gray-500 text-xl">📷</span>
                </div>
                <span className="text-gray-500 text-sm font-medium">No Image Available</span>
              </div>
            </div>
          )}
          
          {/* Category Badge */}
          <div className="absolute top-3 left-3">
            <span className="bg-white/90 backdrop-blur-sm text-blue-600 text-xs font-semibold px-3 py-1.5 rounded-full shadow-sm">
              {product.kategori?.nama_kategori}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10">
          <h3 className="font-bold text-gray-900 text-lg mb-2 line-clamp-2 group-hover:text-blue-700 transition-colors duration-200">
            {product.nama_produk}
          </h3>
          
          {/* Price Section */}
          <div className="flex items-center justify-between mt-4">
            <div>
              <p className="text-sm text-gray-500 mb-1">Price per kg</p>
              <p className="text-2xl font-bold text-blue-600">
                Rp {product.harga_kg.toLocaleString("id-ID")}
                <span className="text-sm font-normal text-gray-500">/kg</span>
              </p>
            </div>
            
            {/* CTA Button */}
            <div className="opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300">
              <button className="bg-blue-600 text-white p-3 rounded-xl hover:bg-blue-700 transition-colors duration-200 shadow-md hover:shadow-lg">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Hover Border Effect */}
        <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-blue-200 transition-all duration-300 pointer-events-none"></div>
      </div>
    </Link>
  );
}