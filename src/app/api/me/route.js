import { NextResponse } from "next/server";
import { getUserIdFromRequest } from "@/lib/authHelper";
import { prisma } from "@/lib/prisma";

export async function GET(req) {
  try {
    // Dapatkan user ID dari kedua sistem authentication
    const { userId, authType } = await getUserIdFromRequest(req);
    
    if (!userId) {
      return NextResponse.json({ user: null });
    }

    const user = await prisma.users.findUnique({
      where: { id_user: userId },
      select: { 
        id_user: true, 
        username: true, 
        email: true,
        alamat: true,
      },
    });

    return NextResponse.json({ user });
  } catch (err) {
    console.error("Error fetching user:", err);
    return NextResponse.json({ user: null });
  }
}
