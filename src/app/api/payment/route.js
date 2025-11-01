import { prisma } from "@/lib/prisma";
import { getUserIdFromRequest } from "@/lib/authHelper";

export async function POST(req) {
  try {
    // Dapatkan user ID dari kedua sistem authentication
    const { userId, authType } = await getUserIdFromRequest(req);
    
    if (!userId) {
      return new Response(JSON.stringify({ error: "Unauthorized - Silakan login terlebih dahulu" }), { status: 401 });
    }

    console.log(`Payment: User authenticated via ${authType}, userId: ${userId}`);

    const { id_pengiriman, metode } = await req.json();

    // Cek data pengiriman valid
    const pengiriman = await prisma.jasa_pengirim.findUnique({
      where: { id_pengiriman: Number(id_pengiriman) },
    });

    if (!pengiriman)
      return new Response(JSON.stringify({ error: "Jasa pengiriman tidak ditemukan" }), {
        status: 400,
      });

    // Ambil semua item keranjang user
    const cartItems = await prisma.keranjang.findMany({
      where: { id_user: userId },
      include: { produk: true },
    });

    if (!cartItems.length)
      return new Response(JSON.stringify({ error: "Keranjang kosong" }), { status: 400 });

    const totalBarang = cartItems.reduce((sum, item) => sum + item.total_harga, 0);
    const totalBayar = totalBarang + pengiriman.harga_pengiriman;

    // Map metode pembayaran ke enum values
    const metodeMap = {
      transfer_bank: "Bank",
      e_wallet: "Dana",
      cod: "Bank", // COD bisa pakai Bank
    };
    const metodeEnum = metodeMap[metode] || "Bank";

    // Simpan snapshot keranjang sebelum checkout (untuk history)
    // Buat transaksi dan simpan detail produk dari keranjang
    const transaksi = await prisma.transaksi.create({
      data: {
        id_user: userId,
        id_pengiriman: pengiriman.id_pengiriman,
        metode_transaksi: metodeEnum,
        status_transaksi: "pending",
      },
      include: {
        jasa_pengirim: true,
      },
    });

    // Hapus semua item keranjang user setelah checkout
    await prisma.keranjang.deleteMany({
      where: { id_user: userId },
    });

    return new Response(
      JSON.stringify({
        message: "Transaksi berhasil dibuat",
        transaksi,
      }),
      { status: 200 }
    );
  } catch (err) {
    console.error("Payment error:", err);
    return new Response(
      JSON.stringify({ 
        error: "Gagal memproses transaksi",
        details: err.message 
      }), 
      { status: 500 }
    );
  }
}

