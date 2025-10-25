import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const kategori = searchParams.get("kategori");


  try {
    let produk = [];

    if (!kategori || kategori === "all") {
      produk = await prisma.produk.findMany({
        include: {
          kategori: true
        }
      });
    } else {
      const kategoriMap = {
        ikan: 1,
        kerang: 2,
        kepiting: 3,
      };

      const idKategori = kategoriMap[kategori.toLowerCase()];
      
      if (idKategori) {
        produk = await prisma.produk.findMany({
          where: { id_kategori: idKategori },
          include: {
            kategori: true
          }
        });
      }
    }

    console.log("API Product - Found products:", produk.length);
    return NextResponse.json(produk);
  } catch (error) {
    console.error("API Product Error:", error);
    return NextResponse.json({ error: "Gagal mengambil data produk" }, { status: 500 });
  }
}

// POST tambah produk
export async function POST(req) {
  try {
    const { id_kategori, nama_produk, stok_kg, harga_kg, deskripsi } = await req.json();

    if (!id_kategori || !nama_produk || !harga_kg)
      return NextResponse.json({ error: "Data wajib diisi dengan lengkap" }, { status: 400 });

    const produkBaru = await prisma.produk.create({
      data: {
        id_kategori: Number(id_kategori),
        nama_produk,
        stok_kg: Number(stok_kg) || 0,
        harga_kg: Number(harga_kg),
        deskripsi,
      },
    });

    return NextResponse.json(produkBaru, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Gagal menambah produk" }, { status: 500 });
  }
}
