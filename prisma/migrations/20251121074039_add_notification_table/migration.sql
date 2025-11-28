-- CreateTable
CREATE TABLE `Notification` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `userId` INTEGER NOT NULL,
    `transactionId` INTEGER NULL,
    `statusId` INTEGER NULL,
    `title` VARCHAR(191) NOT NULL,
    `message` VARCHAR(191) NOT NULL,
    `type` ENUM('INFO', 'SUCCESS', 'WARNING', 'ERROR', 'SYSTEM') NOT NULL DEFAULT 'INFO',
    `actionUrl` VARCHAR(191) NULL,
    `isRead` BOOLEAN NOT NULL DEFAULT false,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `readAt` DATETIME(3) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `TrackingStatus` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `code` VARCHAR(191) NOT NULL,
    `label` VARCHAR(191) NOT NULL,
    `orderPosition` INTEGER NOT NULL,

    UNIQUE INDEX `TrackingStatus_code_key`(`code`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Notification` ADD CONSTRAINT `notifikasi_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `users`(`id_user`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `Notification` ADD CONSTRAINT `Notification_transactionId_fkey` FOREIGN KEY (`transactionId`) REFERENCES `transaksi`(`id_transaksi`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Notification` ADD CONSTRAINT `Notification_statusId_fkey` FOREIGN KEY (`statusId`) REFERENCES `TrackingStatus`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
