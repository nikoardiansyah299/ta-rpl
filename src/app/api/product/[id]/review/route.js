import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import { getUserIdFromRequest } from "@/lib/authHelper";

// GET - Ambil semua review untuk produk tertentu
export async function GET(request, { params }) {
  try {
    const resolvedParams = await params;
    const productId = Number(resolvedParams.id);

    // Validasi productId
    if (isNaN(productId)) {
      return NextResponse.json(
        { error: "ID produk tidak valid" },
        { status: 400 }
      );
    }

    // Ambil reviews dengan informasi user
    const reviews = await prisma.review_produk.findMany({
      where: { id_produk: productId },
      include: {
        users: {
          select: {
            id_user: true,
            username: true,
            email: true,
          },
        },
      },
      orderBy: {
        tanggal_review: "desc",
      },
    });

    // Hitung rata-rata rating
    const totalRating = reviews.reduce((sum, review) => sum + review.rating, 0);
    const averageRating = reviews.length > 0 ? totalRating / reviews.length : 0;
    const ratingCount = reviews.length;

    return NextResponse.json({
      reviews,
      averageRating: Math.round(averageRating * 10) / 10, // Round to 1 decimal
      ratingCount,
    });
  } catch (error) {
    console.error("Error fetching reviews:", error);
    return NextResponse.json(
      { error: "Gagal mengambil review produk" },
      { status: 500 }
    );
  }
}

// POST - Buat review baru
export async function POST(request, { params }) {
  try {
    // Cek authentication
    const { userId, authType } = await getUserIdFromRequest(request);
    if (!userId) {
      return NextResponse.json(
        { error: "Unauthorized - Silakan login terlebih dahulu" },
        { status: 401 }
      );
    }

    const resolvedParams = await params;
    const productId = Number(resolvedParams.id);
    const body = await request.json();
    const { rating, komentar } = body;
    
    console.log('Review POST request:', { productId, userId, rating, komentar: komentar ? `${komentar.substring(0, 50)}...` : 'null' });

    // Validasi productId
    if (isNaN(productId)) {
      return NextResponse.json(
        { error: "ID produk tidak valid" },
        { status: 400 }
      );
    }

    // Validasi rating (1-5)
    if (!rating || rating < 1 || rating > 5) {
      return NextResponse.json(
        { error: "Rating harus antara 1-5 bintang" },
        { status: 400 }
      );
    }

    // Validasi komentar (opsional, minimal 10 karakter jika diisi, maksimal 500 karakter)
    let processedKomentar = null;
    if (komentar !== undefined && komentar !== null) {
      const trimmedKomentar = typeof komentar === 'string' ? komentar.trim() : '';
      if (trimmedKomentar.length > 0) {
        if (trimmedKomentar.length < 10) {
          return NextResponse.json(
            { error: "Komentar minimal 10 karakter" },
            { status: 400 }
          );
        }
        if (trimmedKomentar.length > 500) {
          return NextResponse.json(
            { error: "Komentar maksimal 500 karakter" },
            { status: 400 }
          );
        }
        processedKomentar = trimmedKomentar;
      }
    }

    // Cek apakah produk ada
    const product = await prisma.produk.findUnique({
      where: { id_produk: productId },
    });

    if (!product) {
      return NextResponse.json(
        { error: "Produk tidak ditemukan" },
        { status: 404 }
      );
    }

    // Cek apakah user sudah pernah review produk ini
    const existingReview = await prisma.review_produk.findUnique({
      where: {
        id_produk_id_user: {
          id_produk: productId,
          id_user: userId,
        },
      },
    });

    if (existingReview) {
      // Update review yang sudah ada
      const updatedReview = await prisma.review_produk.update({
        where: { id_review: existingReview.id_review },
        data: {
          rating: Number(rating),
          komentar: processedKomentar,
          tanggal_review: new Date(),
        },
        include: {
          users: {
            select: {
              id_user: true,
              username: true,
              email: true,
            },
          },
        },
      });

      return NextResponse.json(
        {
          message: "Review berhasil diperbarui",
          review: updatedReview,
        },
        { status: 200 }
      );
    }

    // Buat review baru
    const newReview = await prisma.review_produk.create({
      data: {
        id_produk: productId,
        id_user: userId,
        rating: Number(rating),
        komentar: processedKomentar,
      },
      include: {
        users: {
          select: {
            id_user: true,
            username: true,
            email: true,
          },
        },
      },
    });

    return NextResponse.json(
      {
        message: "Review berhasil ditambahkan",
        review: newReview,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error creating review:", error);
    
    // Handle unique constraint error
    if (error.code === "P2002") {
      return NextResponse.json(
        { error: "Anda sudah memberikan review untuk produk ini" },
        { status: 409 }
      );
    }

    return NextResponse.json(
      { error: "Gagal membuat review", details: error.message },
      { status: 500 }
    );
  }
}

