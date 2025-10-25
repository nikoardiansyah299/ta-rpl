import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

// GET semua kategori
export async function GET() {
  try {
    const kategori = await prisma.kategori.findMany({
      include: {
        produk: true,
      },
    });
    return NextResponse.json(kategori);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Gagal mengambil data kategori" }, { status: 500 });
  }
}

// POST tambah kategori baru
export async function POST(req) {
  try {
    const { nama_kategori } = await req.json();

    if (!nama_kategori)
      return NextResponse.json({ error: "Nama kategori wajib diisi" }, { status: 400 });

    const kategoriBaru = await prisma.kategori.create({
      data: { nama_kategori },
    });

    return NextResponse.json(kategoriBaru, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Gagal menambah kategori" }, { status: 500 });
  }
}
