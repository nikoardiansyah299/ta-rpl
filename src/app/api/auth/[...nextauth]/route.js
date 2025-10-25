import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import prisma from "@/lib/prisma";

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
        // cek apakah user udah ada
        const existingUser = await prisma.users.findUnique({
          where: { email: user.email },
        });

        if (!existingUser) {
          // kalau belum ada → auto register
          await prisma.users.create({
            data: {
              username: user.name || user.email.split("@")[0],
              email: user.email,
              password: "", // kosong (karena login by Google)
            },
          });
        }

        return true;
      } catch (err) {
        console.error("SignIn error:", err);
        return false;
      }
    },

    async session({ session }) {
      // inject user info dari DB ke session
      const dbUser = await prisma.users.findUnique({
        where: { email: session.user.email },
      });

      if (dbUser) {
        session.user.id_user = dbUser.id_user;
        session.user.username = dbUser.username;
      }

      return session;
    },
  },
  pages: {
    signIn: "/login",
  },
  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
