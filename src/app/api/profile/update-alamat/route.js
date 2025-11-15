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

    const { alamat } = await req.json();

    if (!alamat || alamat.trim() === "") {
      return NextResponse.json({ 
        error: "Alamat tidak boleh kosong" 
      }, { status: 400 });
    }

    // Update alamat user
    const updatedUser = await prisma.users.update({
      where: { id_user: userId },
      data: { alamat },
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
    return NextResponse.json({ 
      error: "Gagal memperbarui alamat",
      details: error.message 
    }, { status: 500 });
  }
}
