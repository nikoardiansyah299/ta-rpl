// app/api/tracking/[id_transaksi]/route.js
import { prisma } from "@/lib/prisma";
import { getUserIdFromRequest } from "@/lib/authHelper";

export async function GET(req, { params }) {
  try {
    // 🔧 FIX: Await params terlebih dahulu
    const { id_transaksi } = await params;
    
    const { userId, authType } = await getUserIdFromRequest(req);
    
    if (!userId) {
      return Response.json({ 
        message: "Unauthorized - Silakan login terlebih dahulu",
        error: "Unauthorized" 
      }, { status: 401 });
    }

    const transactionId = parseInt(id_transaksi);
    
    if (isNaN(transactionId)) {
      return Response.json({ 
        message: "ID transaksi tidak valid",
        error: "Invalid transaction ID" 
      }, { status: 400 });
    }

    // Verifikasi bahwa transaksi memang milik user
    const transaction = await prisma.transaksi.findFirst({
      where: { 
        id_transaksi: transactionId,
        id_user: userId 
      }
    });

    if (!transaction) {
      return Response.json({ 
        message: "Transaksi tidak ditemukan",
        error: "Transaction not found" 
      }, { status: 404 });
    }

    // Ambil data tracking
    const trackingData = await prisma.tracking_transaksi.findMany({
      where: { 
        id_transaksi: transactionId 
      },
      orderBy: {
        tanggal_tracking: 'asc'
      }
    });

    return Response.json({ 
      success: true,
      tracking_history: trackingData
    });
    
  } catch (error) {
    console.error("Tracking fetch error:", error);
    return Response.json({ 
      message: error.message || "Gagal memuat data tracking",
      error: error.message 
    }, { status: 500 });
  }
}