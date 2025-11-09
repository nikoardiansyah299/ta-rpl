import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import { getUserIdFromRequest } from "@/lib/authHelper";

export async function POST(req) {
  try {
    // Dapatkan user ID dari kedua sistem authentication
    const { userId, authType } = await getUserIdFromRequest(req);
    
    if (!userId) {
      return NextResponse.json({ error: "Unauthorized - Silakan login terlebih dahulu" }, { status: 401 });
    }

  console.log(`User authenticated via ${authType}, userId: ${userId}`);

  const body = await req.json();
  console.log('Add-to-cart body:', JSON.stringify(body));
    let { id_produk, jumlah_pembelian, harga_satuan } = body;

    // normalize types
    id_produk = Number(id_produk);
    jumlah_pembelian = Number(jumlah_pembelian) || 0;
    harga_satuan = Number(harga_satuan) || 0;

    // Hitung total harga
    const total_harga = jumlah_pembelian * harga_satuan;

  // Basic validation: ensure product and user exist to avoid FK violations
  console.log('Validating referenced records: userId=', userId, 'id_produk=', id_produk);
    const userExists = await prisma.users.findUnique({ where: { id_user: Number(userId) } });
    if (!userExists) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    const productExists = await prisma.produk.findUnique({ where: { id_produk } });
    if (!productExists) {
      console.warn('Product not found for id_produk=', id_produk);
      return NextResponse.json({ error: 'Product not found' }, { status: 404 });
    }

    if (jumlah_pembelian <= 0) {
      return NextResponse.json({ error: 'Invalid quantity' }, { status: 400 });
    }

    // Cek apakah produk sudah ada di keranjang user ini
    const existing = await prisma.keranjang.findFirst({
      where: {
        id_user: userId,
        id_produk,
      },
    });

    let item;
    if (existing) {
      item = await prisma.keranjang.update({
        where: { id_keranjang: existing.id_keranjang },
        data: {
          jumlah_pembelian: existing.jumlah_pembelian + jumlah_pembelian,
          total_harga: existing.total_harga + total_harga,
        },
      });
    } else {
      item = await prisma.keranjang.create({
        data: {
          id_user: userId,
          id_produk,
          jumlah_pembelian,
          total_harga,
        },
      });
    }

    return NextResponse.json(item, { status: 200 });
  } catch (err) {
    console.error("Error adding to cart:", err);
    // Prisma foreign key error code P2003
    if (err?.code === 'P2003') {
      return NextResponse.json({ error: 'Foreign key constraint violated - referenced record not found' }, { status: 400 });
    }
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
