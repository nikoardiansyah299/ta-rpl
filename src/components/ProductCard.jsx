import Image from "next/image";
import Link from "next/link";

export default function ProductCard({ product }) {
  
  return (
    <Link href={`/product/${product.id_produk}`}>
      <div className="border rounded-xl p-4 shadow hover:shadow-lg transition bg-white">
        {/* <Image
          src={product.image || "/default.jpg"}
          alt={product.nama_produk}
          width={300}
          height={200}
          className="rounded-md object-cover w-full h-48"
        /> */}
        <h3 className="font-semibold text-lg mt-3">{product.nama_produk}</h3>
        <p className="text-sm text-gray-600">{product.kategori?.nama_kategori}</p>
        <p className="text-blue-600 font-bold mt-2">
          Rp {product.harga_kg.toLocaleString("id-ID")}/kg
        </p>
      </div>
    </Link>
  );
}
