import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import jwt from "jsonwebtoken";

/**
 * Helper function untuk mendapatkan user ID dari kedua sistem authentication
 * @param {Request} req - Request object
 * @returns {Object} - { userId: number | null, authType: 'nextauth' | 'jwt' | null }
 */
export async function getUserIdFromRequest(req) {
  try {
    // Coba NextAuth session terlebih dahulu (pass req and res context)
    const session = await getServerSession(authOptions);
    if (session?.user?.id_user) {
      console.log(`[AuthHelper] NextAuth session found: id_user=${session.user.id_user}`);
      return {
        userId: session.user.id_user,
        authType: 'nextauth'
      };
    }

    // Jika NextAuth tidak ada, coba JWT dari cookie
    let token = null;
    
    // Handle cookie dari request object
    if (req && typeof req.cookies.get === 'function') {
      token = req.cookies.get("access_token")?.value;
    }
    
    if (token) {
      try {
        const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
        console.log(`[AuthHelper] JWT token verified: id_user=${decoded.id_user}`);
        return {
          userId: decoded.id_user,
          authType: 'jwt'
        };
      } catch (jwtErr) {
        console.error(`[AuthHelper] JWT verification failed:`, jwtErr.message);
        return { userId: null, authType: null };
      }
    }

    console.log(`[AuthHelper] No session or token found`);
    return { userId: null, authType: null };
  } catch (err) {
    console.error("[AuthHelper] Error getting user ID:", err);
    return { userId: null, authType: null };
  }
}

/**
 * Helper function untuk client-side authentication check
 * @returns {Object} - { isAuthenticated: boolean, authType: 'nextauth' | 'jwt' | null }
 */
export function checkClientAuth() {
  // Cek NextAuth session (akan diimplementasikan di client)
  // Cek JWT token dari cookies
  if (typeof window !== 'undefined') {
    const token = document.cookie
      .split('; ')
      .find(row => row.startsWith('access_token='))
      ?.split('=')[1];
    
    if (token) {
      return { isAuthenticated: true, authType: 'jwt' };
    }
  }
  
  return { isAuthenticated: false, authType: null };
}
