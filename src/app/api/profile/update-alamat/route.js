import { NextResponse } from "next/server";
import { getUserIdFromRequest } from "@/lib/authHelper";
import { prisma } from "@/lib/prisma";

export async function PUT(req) {
  try {
    // Dapatkan user ID dari kedua sistem authentication
    const { userId, authType } = await getUserIdFromRequest(req);
    
    if (!userId) {
      return NextResponse.json({ 
        error: "Unauthorized - Silakan login terlebih dahulu" 
      }, { status: 401 });
    }

    // Konversi userId ke number dan validasi
    const userIdNumber = Number(userId);
    if (isNaN(userIdNumber)) {
      console.error("Invalid userId:", userId);
      return NextResponse.json({ 
        error: "Invalid user ID" 
      }, { status: 400 });
    }

    // Cek apakah user ada di database
    const userExists = await prisma.users.findUnique({
      where: { id_user: userIdNumber },
      select: { id_user: true },
    });

    if (!userExists) {
      console.error("User not found:", userIdNumber);
      return NextResponse.json({ 
        error: "User tidak ditemukan" 
      }, { status: 404 });
    }

    console.log("Updating address for user:", userIdNumber, "authType:", authType);

    const { alamat } = await req.json();

    // Validasi alamat harus berupa object JSON
    if (!alamat || typeof alamat !== "object" || Array.isArray(alamat)) {
      return NextResponse.json({ 
        error: "Alamat harus berupa object JSON dengan format {negara, kota, jalan, detail}" 
      }, { status: 400 });
    }

    // Validasi field wajib
    if (!alamat.negara || !alamat.negara.trim()) {
      return NextResponse.json({ 
        error: "Negara wajib diisi" 
      }, { status: 400 });
    }

    if (!alamat.kota || !alamat.kota.trim()) {
      return NextResponse.json({ 
        error: "Kota wajib diisi" 
      }, { status: 400 });
    }

    if (!alamat.jalan || !alamat.jalan.trim()) {
      return NextResponse.json({ 
        error: "Jalan wajib diisi" 
      }, { status: 400 });
    }

    // Format data alamat yang akan disimpan
    const formattedAlamat = {
      negara: alamat.negara.trim(),
      kota: alamat.kota.trim(),
      jalan: alamat.jalan.trim(),
      detail: alamat.detail && alamat.detail.trim() ? alamat.detail.trim() : null
    };

    // Update alamat user
    const updatedUser = await prisma.users.update({
      where: { id_user: userIdNumber },
      data: { alamat: formattedAlamat },
      select: {
        id_user: true,
        username: true,
        email: true,
        alamat: true,
      },
    });

    return NextResponse.json({ 
      message: "Alamat berhasil diperbarui",
      user: updatedUser 
    }, { status: 200 });
  } catch (error) {
    console.error("Error updating address:", error);
    console.error("Error code:", error.code);
    console.error("Error meta:", error.meta);
    
    // Handle Prisma error khusus
    if (error.code === 'P2025') {
      return NextResponse.json({ 
        error: "User tidak ditemukan. Silakan login ulang." 
      }, { status: 404 });
    }
    
    return NextResponse.json({ 
      error: "Gagal memperbarui alamat",
      details: error.message 
    }, { status: 500 });
  }
}
