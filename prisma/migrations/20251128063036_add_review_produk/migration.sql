/*
  Warnings:

  - The values [Qris,Dana] on the enum `transaksi_metode_transaksi` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterTable
ALTER TABLE `transaksi` MODIFY `metode_transaksi` ENUM('Bank', 'Visa', 'Paypal') NULL;

-- CreateTable
CREATE TABLE `review_produk` (
    `id_review` INTEGER NOT NULL AUTO_INCREMENT,
    `id_produk` INTEGER NOT NULL,
    `id_user` INTEGER NOT NULL,
    `rating` TINYINT NOT NULL,
    `komentar` TEXT NULL,
    `tanggal_review` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    INDEX `id_produk`(`id_produk`),
    INDEX `id_user`(`id_user`),
    UNIQUE INDEX `unique_user_product_review`(`id_produk`, `id_user`),
    PRIMARY KEY (`id_review`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `review_produk` ADD CONSTRAINT `review_produk_id_produk_fkey` FOREIGN KEY (`id_produk`) REFERENCES `produk`(`id_produk`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `review_produk` ADD CONSTRAINT `review_produk_id_user_fkey` FOREIGN KEY (`id_user`) REFERENCES `users`(`id_user`) ON DELETE CASCADE ON UPDATE CASCADE;
