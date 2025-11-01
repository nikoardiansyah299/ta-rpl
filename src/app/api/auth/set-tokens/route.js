import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "../[...nextauth]/route";
import jwt from "jsonwebtoken";
import prisma from "@/lib/prisma";

// Route untuk set JWT tokens setelah Google Auth login
export async function POST(req) {
  try {
    // Cek NextAuth session
    const session = await getServerSession(authOptions);

    if (!session?.user?.id_user) {
      return NextResponse.json(
        { error: "Unauthorized - No active session" },
        { status: 401 }
      );
    }

    // Ambil user dari DB
    const user = await prisma.users.findUnique({
      where: { id_user: session.user.id_user },
    });

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    // Generate access token dan refresh token
    const accessToken = jwt.sign(
      { id_user: user.id_user, email: user.email },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: "15m" }
    );
    const refreshToken = jwt.sign(
      { id_user: user.id_user, email: user.email },
      process.env.REFRESH_TOKEN_SECRET,
      { expiresIn: "7d" }
    );

    // Simpan refresh token ke DB
    await prisma.users.update({
      where: { id_user: user.id_user },
      data: { token: refreshToken },
    });

    // Set cookies
    const response = NextResponse.json({
      message: "Tokens set successfully",
      user: {
        id_user: user.id_user,
        username: user.username,
        email: user.email,
      },
    });

    response.cookies.set("access_token", accessToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 15 * 60, // 15 menit
      path: "/",
    });

    response.cookies.set("refresh_token", refreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 7 * 24 * 60 * 60, // 7 hari
      path: "/",
    });

    return response;
  } catch (error) {
    console.error("Error setting tokens:", error);
    return NextResponse.json(
      { error: "Failed to set tokens", details: error.message },
      { status: 500 }
    );
  }
}

