import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import prisma from "@/lib/prisma";
import jwt from "jsonwebtoken";

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async signIn({ user }) {
      try {
        const existingUser = await prisma.users.findUnique({
          where: { email: user.email },
        });

        if (!existingUser) {
          await prisma.users.create({
            data: {
              username: user.name || user.email.split("@")[0],
              email: user.email,
              password: "",
            },
          });
        }

        return true;
      } catch (err) {
        console.error("SignIn error:", err);
        return false;
      }
    },

    async jwt({ token, user, account, profile }) {
      // Saat pertama kali login (user ada)
      if (user) {
        const dbUser = await prisma.users.findUnique({
          where: { email: user.email },
        });

        if (dbUser) {
          token.id_user = dbUser.id_user;
          token.email = dbUser.email;
        }
      }
      if (profile?.picture) {
        token.picture = profile.picture;
      }

      return token;
    },

    async session({ session, token }) {
      // inject user info dari token ke session
      if (token) {
        session.user.id_user = token.id_user;
        session.user.email = token.email;
      }

      // inject user info dari DB ke session (backup)
      const dbUser = await prisma.users.findUnique({
        where: { email: session.user.email },
      });

      if (dbUser) {
        session.user.id_user = dbUser.id_user;
        session.user.username = dbUser.username;
        session.user.image = token.picture || session.user.image || dbUser.image;
      }

      return session;
    },
  },
  events: {
    async signIn({ user, account, profile }) {
      // Setelah sign in berhasil, generate JWT token untuk kompatibilitas
      try {
        const dbUser = await prisma.users.findUnique({
          where: { email: user.email },
        });

        if (dbUser) {
          // Generate access token dan refresh token
          const accessToken = jwt.sign(
            { id_user: dbUser.id_user, email: dbUser.email },
            process.env.ACCESS_TOKEN_SECRET,
            { expiresIn: "15m" }
          );
          const refreshToken = jwt.sign(
            { id_user: dbUser.id_user, email: dbUser.email },
            process.env.REFRESH_TOKEN_SECRET,
            { expiresIn: "7d" }
          );

          // Simpan refresh token ke DB
          await prisma.users.update({
            where: { id_user: dbUser.id_user },
            data: { token: refreshToken },
          });

          // Token akan diset via cookies di response (harus di-handle di client atau melalui API route)
        }
      } catch (err) {
        console.error("Error generating JWT tokens for Google Auth:", err);
      }
    },
  },
  pages: {
    signIn: "/login",
  },
  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };