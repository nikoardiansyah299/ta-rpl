import { NextResponse } from "next/server";
import { getUserIdFromRequest } from "@/lib/authHelper";
import { prisma } from "@/lib/prisma";

export async function GET(req) {
  try {
    // getUserIdFromRequest may return { userId, authType, newAccessToken }
    const result = await getUserIdFromRequest(req);
    const { userId, authType, newAccessToken } = result || {};

    if (!userId) {
      return NextResponse.json({ user: null }, { status: 200 });
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

    if (!user) {
      return NextResponse.json({ user: null }, { status: 200 });
    }

    // Prepare response
    const response = NextResponse.json({ user }, { status: 200 });

    // If authHelper returned a newAccessToken, set it to cookie
    if (newAccessToken) {
      const isProd = process.env.NODE_ENV === "production";
      response.cookies.set("access_token", newAccessToken, {
        httpOnly: true,
        secure: isProd,
        sameSite: "strict",
        maxAge: 15 * 60, // 15 minutes
        path: "/",
      });
      // Note: we do not change refresh_token here (unless you want rotation)
    }

    return response;
  } catch (err) {
    console.error("Error fetching user:", err);
    return NextResponse.json({ user: null }, { status: 500 });
  }
}
