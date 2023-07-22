/*
  Warnings:

  - Added the required column `category_id` to the `medicines` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `medicines` ADD COLUMN `category_id` INTEGER NOT NULL;

-- CreateTable
CREATE TABLE `Catygory` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `medicines` ADD CONSTRAINT `medicines_category_id_fkey` FOREIGN KEY (`category_id`) REFERENCES `Catygory`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
