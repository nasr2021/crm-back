-- DropForeignKey
ALTER TABLE `client` DROP FOREIGN KEY `Client_salesOwnerId_fkey`;

-- DropIndex
DROP INDEX `Client_salesOwnerId_fkey` ON `client`;

-- AlterTable
ALTER TABLE `client` MODIFY `salesOwnerId` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `Client` ADD CONSTRAINT `Client_salesOwnerId_fkey` FOREIGN KEY (`salesOwnerId`) REFERENCES `User`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
