import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { getToken } from "next-auth/jwt";

export async function middleware(req) {
  const accessToken = req.cookies.get("access_token")?.value;
  const refreshToken = req.cookies.get("refresh_token")?.value;
  const nextAuthToken = await getToken({ 
    req, 
    secret: process.env.NEXTAUTH_SECRET 
  });

  const { pathname } = req.nextUrl;

  // Halaman yang tidak butuh proteksi
  if (pathname.startsWith("/login") || pathname.startsWith("/register") || pathname.startsWith("/api")) {
    return NextResponse.next();
  }

  // Jika ada NextAuth session (Google Auth), langsung allow
  if (nextAuthToken?.id_user) {
    return NextResponse.next();
  }

  // Kalau tidak ada token sama sekali → redirect ke login
  if (!accessToken && !refreshToken && !nextAuthToken) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  try {
    // Validasi access token
    if (accessToken) {
      jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET);
      // valid → lanjut
      return NextResponse.next();
    }
  } catch (err) {
    // kalau access token invalid / expired
    if (refreshToken) {
      try {
        // coba refresh token
        const refreshResponse = await fetch(`${req.nextUrl.origin}/api/token/refresh`, {
          method: "GET",
          headers: {
            Cookie: req.headers.get("cookie") || "",
          },
        });

        if (refreshResponse.ok) {
          // sukses refresh token → lanjut (cookies sudah di-set oleh refresh endpoint)
          return NextResponse.next();
        } else {
          // gagal refresh → login lagi
          return NextResponse.redirect(new URL("/login", req.url));
        }
      } catch (error) {
        return NextResponse.redirect(new URL("/login", req.url));
      }
    }

    // tidak ada refresh token → redirect login
    return NextResponse.redirect(new URL("/login", req.url));
  }
}

// Tentukan route yang ingin diproteksi
export const config = {
  matcher: [
    "/dashboard/:path*", // proteksi halaman dashboard
    "/profile",          // proteksi halaman profile
    "/profile/:path*",   // proteksi sub-halaman profile
    "/transaksi/:path*",
  ],
};
