// lib/trackingHelper.js
import { prisma } from "@/lib/prisma";

export const TRACKING_STATUS = {
  ORDER_CREATED: 'pesanan_dibuat',
  PAYMENT_CONFIRMED: 'pembayaran_dikonfirmasi', 
  PROCESSING: 'sedang_diproses',
  QUALITY_CHECK: 'quality_control',
  PACKAGING: 'packaging',
  SHIPPED_TO_PORT: 'dikirim_ke_pelabuhan',
  PORT_DEPARTURE: 'berangkat_dari_pelabuhan',
  PORT_ARRIVAL: 'tiba_di_pelabuhan_tujuan',
  CUSTOMS_CHECK: 'proses_bea_cukai',
  IN_TRANSIT: 'dalam_perjalanan',
  OUT_FOR_DELIVERY: 'menuju_alamat_tujuan',
  DELIVERED: 'terkirim'
};

export const createTrackingEntry = async (id_transaksi, status_tracking, deskripsi) => {
  try {
    const tracking = await prisma.tracking_transaksi.create({
      data: {
        id_transaksi,
        status_tracking,
        deskripsi,
        tanggal_tracking: new Date()
      }
    });
    
    console.log(`Tracking created for transaction ${id_transaksi}: ${status_tracking}`);
    return tracking;
  } catch (error) {
    console.error('Error creating tracking entry:', error);
    throw error;
  }
};

export const initializeTransactionTracking = async (id_transaksi) => {
  try {
    console.log(`Initializing tracking for transaction: ${id_transaksi}`);
    
    const initialTrackings = [
      {
        status: TRACKING_STATUS.ORDER_CREATED,
        deskripsi: 'Pesanan telah berhasil dibuat dan sedang menunggu konfirmasi pembayaran'
      }
    ];

    const results = [];
    for (const tracking of initialTrackings) {
      const result = await createTrackingEntry(id_transaksi, tracking.status, tracking.deskripsi);
      results.push(result);
    }

    console.log(`Successfully created ${results.length} initial tracking entries for transaction ${id_transaksi}`);
    return results;
  } catch (error) {
    console.error('Failed to initialize transaction tracking:', error);
    throw error;
  }
};

export const addShippingTracking = async (id_transaksi) => {
  try {
    const shippingTrackings = [
      {
        status: TRACKING_STATUS.PROCESSING,
        deskripsi: 'Produk sedang melalui proses preparasi dan quality control'
      },
      {
        status: TRACKING_STATUS.QUALITY_CHECK,
        deskripsi: 'Quality control: Memastikan kualitas produk sesuai standar ekspor internasional'
      },
      {
        status: TRACKING_STATUS.PACKAGING,
        deskripsi: 'Produk sedang dikemas dengan standar packaging yang aman untuk pengiriman jarak jauh'
      },
      {
        status: TRACKING_STATUS.SHIPPED_TO_PORT,
        deskripsi: 'Pesanan telah dikirim menuju pelabuhan ekspor di Indonesia'
      }
    ];

    const results = [];
    for (const tracking of shippingTrackings) {
      const result = await createTrackingEntry(id_transaksi, tracking.status, tracking.deskripsi);
      results.push(result);
    }

    console.log(`📦 Added ${results.length} shipping tracking entries for transaction ${id_transaksi}`);
    return results;
  } catch (error) {
    console.error('Failed to add shipping tracking:', error);
    throw error;
  }
};