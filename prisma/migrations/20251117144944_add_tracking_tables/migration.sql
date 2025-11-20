-- CreateTable
CREATE TABLE `tracking_transaksi` (
    `id_tracking` INTEGER NOT NULL AUTO_INCREMENT,
    `id_transaksi` INTEGER NOT NULL,
    `status_tracking` VARCHAR(100) NOT NULL,
    `deskripsi` TEXT NOT NULL,
    `tanggal_tracking` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `created_at` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    INDEX `tracking_transaksi_id_transaksi_idx`(`id_transaksi`),
    PRIMARY KEY (`id_tracking`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `tracking_transaksi` ADD CONSTRAINT `tracking_transaksi_id_transaksi_fkey` FOREIGN KEY (`id_transaksi`) REFERENCES `transaksi`(`id_transaksi`) ON DELETE CASCADE ON UPDATE CASCADE;
