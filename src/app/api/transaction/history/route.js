// /app/api/transaction/history/route.js
import { prisma } from "@/lib/prisma";
import { getUserIdFromRequest } from "@/lib/authHelper";

export async function GET(req) {
  try {
    // Dapatkan user ID dari kedua sistem authentication
    const { userId, authType } = await getUserIdFromRequest(req);
    
    if (!userId) {
      return Response.json({ 
        message: "Unauthorized - Silakan login terlebih dahulu",
        error: "Unauthorized" 
      }, { status: 401 });
    }

    console.log(`Transaction History: User authenticated via ${authType}, userId: ${userId}`);

    // Ambil data transaksi
    const transaksi = await prisma.transaksi.findMany({
      where: { id_user: userId },
      include: {
        jasa_pengirim: true,
        detail_transaksi: {
          include: {
            produk: true,
          },
        },
      },
      orderBy: { tgl_transaksi: "desc" },
    });

    return Response.json({ 
      transaksi
    });
  } catch (error) {
    console.error("Transaction history error:", error);
    return Response.json({ 
      message: error.message || "Gagal memuat riwayat transaksi",
      error: error.message 
    }, { status: 500 });
  }
}
