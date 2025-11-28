import { prisma } from "@/lib/prisma";
import { getUserIdFromRequest } from "@/lib/authHelper";
import { initializeTransactionTracking } from "@/lib/trackingHelper";

export async function POST(req) {
  try {
    const { userId, authType } = await getUserIdFromRequest(req);
    if (!userId) {
      return new Response(JSON.stringify({ error: "Unauthorized - Silakan login terlebih dahulu" }), { status: 401 });
    }

    console.log(`Payment: User authenticated via ${authType}, userId: ${userId}`);

    const { id_pengiriman, metode } = await req.json();

    const pengiriman = await prisma.jasa_pengirim.findUnique({
      where: { id_pengiriman: Number(id_pengiriman) },
    });

    if (!pengiriman)
      return new Response(JSON.stringify({ error: "Jasa pengiriman tidak ditemukan" }), { status: 400 });

    const cartItems = await prisma.keranjang.findMany({
      where: { id_user: userId },
      include: { produk: true },
    });

    if (!cartItems.length)
      return new Response(JSON.stringify({ error: "Keranjang kosong" }), { status: 400 });

    const totalBarang = cartItems.reduce((sum, item) => sum + item.total_harga, 0);
    const totalBayar = totalBarang + pengiriman.harga_pengiriman;

    const metodeMap = {
      transfer_bank: "Bank",
      Visa: "Visa",
      Paypal: "Paypal",
    };
    const metodeEnum = metodeMap[metode] || "Bank";

    // === START TRANSACTION ===
    const result = await prisma.$transaction(async (tx) => {
      // Buat transaksi utama
      const transaksi = await tx.transaksi.create({
        data: {
          id_user: userId,
          id_pengiriman: pengiriman.id_pengiriman,
          metode_transaksi: metodeEnum,
          status_transaksi: "pending",
        },
      });

      //Simpan detail transaksi per produk
      for (const item of cartItems) {
        await tx.detail_transaksi.create({
          data: {
            id_transaksi: transaksi.id_transaksi,
            id_produk: item.id_produk,
            jumlah_kg: item.jumlah_pembelian,
            subtotal: item.total_harga,
          },
        });
      }

      await tx.keranjang.deleteMany({ where: { id_user: userId } });

      return transaksi;
    });

    // Initialize tracking after the transaction has been committed
    try {
      await initializeTransactionTracking(result.id_transaksi);
      console.log(`Tracking initialized for transaction ${result.id_transaksi}`);
    } catch (trackingError) {
      console.error('Tracking initialization failed:', trackingError);
      // Do not fail the payment response if tracking initialization fails
    }

    return new Response(
      JSON.stringify({
        message: "Transaksi berhasil dibuat",
        totalBayar,
        transaksi: result,
      }),
      { status: 200 }
    );
  } catch (err) {
    console.error("Payment error:", err);
    return new Response(
      JSON.stringify({
        error: "Gagal memproses transaksi",
        details: err.message,
      }),
      { status: 500 }
    );
  }
}
