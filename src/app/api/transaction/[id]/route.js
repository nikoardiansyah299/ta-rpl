<<<<<<< HEAD
// app/api/transaction/[id]/route.js
=======
>>>>>>> 64c14e1fc4133cf658d8fd5f77e222e019be7bea
import { prisma } from "@/lib/prisma";
import { getUserIdFromRequest } from "@/lib/authHelper";

export async function GET(req, { params }) {
  try {
<<<<<<< HEAD
    // 🔧 FIX: Await params
    const { id } = await params;
    
=======
>>>>>>> 64c14e1fc4133cf658d8fd5f77e222e019be7bea
    const { userId, authType } = await getUserIdFromRequest(req);
    
    if (!userId) {
      return Response.json({ 
        message: "Unauthorized - Silakan login terlebih dahulu",
        error: "Unauthorized" 
      }, { status: 401 });
    }

<<<<<<< HEAD
    const transactionId = parseInt(id);
=======
    const transactionId = parseInt(params.id);
>>>>>>> 64c14e1fc4133cf658d8fd5f77e222e019be7bea
    
    if (isNaN(transactionId)) {
      return Response.json({ 
        message: "ID transaksi tidak valid",
        error: "Invalid transaction ID" 
      }, { status: 400 });
    }

    console.log(`Transaction Detail: User ${userId} requesting transaction ${transactionId}`);

    // Ambil data transaksi yang hanya dimiliki oleh user tersebut
    const transaksi = await prisma.transaksi.findFirst({
      where: { 
        id_transaksi: transactionId,
        id_user: userId 
      },
      include: {
        jasa_pengirim: true,
        detail_transaksi: {
          include: {
            produk: {
              select: {
                id_produk: true,
                nama_produk: true,
                harga_kg: true,
                gambar: true
              }
            }
          }
<<<<<<< HEAD
        },
        tracking_transaksi: {
          orderBy: {
            tanggal_tracking: 'asc'
          }
=======
>>>>>>> 64c14e1fc4133cf658d8fd5f77e222e019be7bea
        }
      }
    });

    if (!transaksi) {
      return Response.json({ 
        message: "Transaksi tidak ditemukan",
        error: "Transaction not found" 
      }, { status: 404 });
    }

    return Response.json({ 
      transaksi
    });
    
  } catch (error) {
    console.error("Transaction detail error:", error);
    return Response.json({ 
      message: error.message || "Gagal memuat detail transaksi",
      error: error.message 
    }, { status: 500 });
  }
}