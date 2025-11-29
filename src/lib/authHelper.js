import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import jwt from "jsonwebtoken";
import { prisma } from "@/lib/prisma";

/**
 * Returns:
 *  - { userId, authType } when access token valid OR NextAuth session present
 *  - { userId, authType, newAccessToken } when access expired but refresh ok (newAccessToken IS present)
 *  - { userId: null, authType: null } otherwise
 *
 * Note: This helper does NOT set cookies. If a newAccessToken is returned,
 * caller should set it into cookie on the response.
 */
export async function getUserIdFromRequest(req) {
  try {
<<<<<<< HEAD
    // 1) NextAuth (Google) session first
    try {
      const session = await getServerSession(authOptions);
      if (session?.user?.id_user) {
        return { userId: session.user.id_user, authType: "nextauth" };
      }
    } catch (e) {
      // ignore next-auth errors and continue to JWT
      // console.error("next-auth session error:", e);
    }

    // 2) Try access_token (JWT)
    let accessToken;
    if (req.cookies?.get) {
      accessToken = req.cookies.get("access_token")?.value;
    }
    // fallback read cookie header (if needed)
    if (!accessToken) {
      const cookieHeader = req.headers?.get?.("cookie");
      if (cookieHeader) {
        const match = cookieHeader.split("; ").find((r) => r.startsWith("access_token="));
        accessToken = match?.split("=")[1];
      }
    }

    if (accessToken) {
      try {
        const decoded = jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET);
        return { userId: decoded.id_user, authType: "jwt" };
      } catch (err) {
        // Access token invalid/expired -> we'll try refresh below
      }
    }

    // 3) Access token absent/expired -> try refresh token
    let refreshToken;
    if (req.cookies?.get) {
      refreshToken = req.cookies.get("refresh_token")?.value;
    }
    if (!refreshToken) {
      const cookieHeader = req.headers?.get?.("cookie");
      if (cookieHeader) {
        const match = cookieHeader.split("; ").find((r) => r.startsWith("refresh_token="));
        refreshToken = match?.split("=")[1];
      }
    }

    if (!refreshToken) {
      return { userId: null, authType: null };
    }

    // verify refresh token
    let payload;
    try {
      payload = jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET);
    } catch (err) {
      // invalid refresh token
      return { userId: null, authType: null };
    }

    // check DB whether refresh token matches stored value
    const user = await prisma.users.findUnique({
      where: { id_user: payload.id_user },
    });

    if (!user || !user.token && !user.refresh_token) {
      // handle both possible column names (token or refresh_token)
      // if your column is 'token', use user.token; if 'refresh_token', use user.refresh_token
      // adapt if necessary
      return { userId: null, authType: null };
    }

    // accept both column names: prefer refresh_token then token
    const dbRefresh = user.refresh_token ?? user.token;
    if (dbRefresh !== refreshToken) {
      return { userId: null, authType: null };
    }

    // refresh token ok -> generate new access token
    const newAccessToken = jwt.sign(
      { id_user: user.id_user, email: user.email },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: "15m" }
    );

    // Optionally: rotate refresh token (more secure). Here we keep existing refresh token,
    // but you may want to issue a new refresh token and update DB and cookie.
    // If you want rotation, generate newRefreshToken, save to DB, and return it as well.

    return { userId: user.id_user, authType: "jwt", newAccessToken };
  } catch (err) {
    console.error("getUserIdFromRequest error:", err);
=======
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
>>>>>>> 64c14e1fc4133cf658d8fd5f77e222e019be7bea
    return { userId: null, authType: null };
  }
}
