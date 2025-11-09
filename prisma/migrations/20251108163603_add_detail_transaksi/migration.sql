-- CreateTable
CREATE TABLE `jasa_pengirim` (
    `id_pengiriman` INTEGER NOT NULL AUTO_INCREMENT,
    `jasa_kirim` VARCHAR(100) NOT NULL,
    `harga_pengiriman` INTEGER NOT NULL,

    PRIMARY KEY (`id_pengiriman`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `keranjang` (
    `id_keranjang` INTEGER NOT NULL AUTO_INCREMENT,
    `id_user` INTEGER NOT NULL,
    `id_produk` INTEGER NOT NULL,
    `jumlah_pembelian` INTEGER NOT NULL,
    `total_harga` INTEGER NOT NULL,

    INDEX `id_produk`(`id_produk`),
    INDEX `id_user`(`id_user`),
    PRIMARY KEY (`id_keranjang`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `transaksi` (
    `id_transaksi` INTEGER NOT NULL AUTO_INCREMENT,
    `id_user` INTEGER NOT NULL,
    `id_pengiriman` INTEGER NOT NULL,
    `metode_transaksi` ENUM('Bank', 'Qris', 'Dana', 'Paypal') NULL,
    `tgl_transaksi` TIMESTAMP(0) NULL DEFAULT CURRENT_TIMESTAMP(0),
    `status_transaksi` VARCHAR(50) NULL DEFAULT 'pending',

    INDEX `id_pengiriman`(`id_pengiriman`),
    INDEX `id_user`(`id_user`),
    PRIMARY KEY (`id_transaksi`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `produk` (
    `id_produk` INTEGER NOT NULL AUTO_INCREMENT,
    `nama_produk` VARCHAR(100) NOT NULL,
    `stok_kg` INTEGER NULL DEFAULT 0,
    `harga_kg` INTEGER NOT NULL,
    `deskripsi` TEXT NULL,
    `status` VARCHAR(50) NULL,
    `gambar` VARCHAR(255) NULL,

    PRIMARY KEY (`id_produk`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `detail_transaksi` (
    `id_detail` INTEGER NOT NULL AUTO_INCREMENT,
    `id_transaksi` INTEGER NOT NULL,
    `id_produk` INTEGER NOT NULL,
    `jumlah_kg` INTEGER NOT NULL,
    `subtotal` INTEGER NOT NULL,

    INDEX `detail_transaksi_id_transaksi_idx`(`id_transaksi`),
    INDEX `detail_transaksi_id_produk_idx`(`id_produk`),
    PRIMARY KEY (`id_detail`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `users` (
    `id_user` INTEGER NOT NULL AUTO_INCREMENT,
    `username` VARCHAR(50) NOT NULL,
    `password` VARCHAR(255) NOT NULL,
    `token` VARCHAR(255) NULL,
    `email` VARCHAR(100) NOT NULL,
    `alamat` VARCHAR(100) NULL,

    UNIQUE INDEX `email`(`email`),
    PRIMARY KEY (`id_user`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `keranjang` ADD CONSTRAINT `keranjang_ibfk_1` FOREIGN KEY (`id_user`) REFERENCES `users`(`id_user`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `keranjang` ADD CONSTRAINT `keranjang_ibfk_2` FOREIGN KEY (`id_produk`) REFERENCES `produk`(`id_produk`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `transaksi` ADD CONSTRAINT `transaksi_ibfk_1` FOREIGN KEY (`id_user`) REFERENCES `users`(`id_user`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `transaksi` ADD CONSTRAINT `transaksi_ibfk_2` FOREIGN KEY (`id_pengiriman`) REFERENCES `jasa_pengirim`(`id_pengiriman`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `detail_transaksi` ADD CONSTRAINT `detail_transaksi_id_transaksi_fkey` FOREIGN KEY (`id_transaksi`) REFERENCES `transaksi`(`id_transaksi`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `detail_transaksi` ADD CONSTRAINT `detail_transaksi_id_produk_fkey` FOREIGN KEY (`id_produk`) REFERENCES `produk`(`id_produk`) ON DELETE RESTRICT ON UPDATE CASCADE;
