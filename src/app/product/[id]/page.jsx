import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export default async function ProductDetail({ params }) {
    const { id } = await params;
    const session = await getServerSession(authOptions);

    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/product/${id}`, {
        cache: "no-store",
    });
    const product = await res.json();
    if (!product) {
        return <p className="text-center mt-10">Produk tidak ditemukan.</p>;
    }

    return (
        <>
        <Navbar textColor="text-black" serverSession={session}/>
            <div className="min-h-screen flex flex-col items-center justify-center py-10 px-6">
                <div className="max-w-4xl w-full bg-white rounded-2xl shadow-lg overflow-hidden">
                    <div className="flex flex-col md:flex-row">
                        <div className="relative w-full md:w-1/2 h-[400px]">
                            <Image
                            src={product.image_url || "/product-media/default.jpg"}
                            alt={product.nama_produk}
                            fill
                            className="object-cover"
                            />
                        </div>

                        <div className="p-6 md:w-1/2 flex flex-col justify-between">
                            <div>
                                <h1 className="text-3xl font-bold mb-4">{product.nama_produk}</h1>
                                <p className="text-gray-600 mb-6">{product.deskripsi || "Tidak ada deskripsi."}</p>
                                <p className="text-2xl font-semibold text-blue-600">
                                    Rp {product.harga_kg.toLocaleString()} / kg
                                </p>
                            </div>
                            <div className="flex gap-5 items-end w-full">
                                <button className="mt-6 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition">Add to Cart</button>
                                <button className="mt-6 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition">Order Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        <Footer/>
        </>
    );
}
