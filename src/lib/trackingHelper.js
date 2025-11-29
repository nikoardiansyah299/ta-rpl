// lib/trackingHelper.js
import { prisma } from "@/lib/prisma";

export const TRACKING_STATUS = {
  ORDER_CREATED: 'Order Created',
  PAYMENT_CONFIRMED: 'Payment Confirmed', 
  PROCESSING: 'In Processing',
  QUALITY_CHECK: 'Quality Control',
  PACKAGING: 'Packaging',
  SHIPPED_TO_PORT: 'Sent to Harbour',
  PORT_DEPARTURE: 'Departed from Harbour',
  PORT_ARRIVAL: 'Arrived at Destination',
  CUSTOMS_CHECK: 'Processing Customs',
  IN_TRANSIT: 'In Transit',
  OUT_FOR_DELIVERY: 'To the Destination Address',
  DELIVERED: 'Delivered'
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
        deskripsi: 'Order has been created and is awaiting payment confirmation'
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