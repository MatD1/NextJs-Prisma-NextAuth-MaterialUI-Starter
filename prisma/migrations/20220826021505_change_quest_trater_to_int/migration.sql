/*
  Warnings:

  - The `questTrader` column on the `UserQuests` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "UserQuests" DROP COLUMN "questTrader",
ADD COLUMN     "questTrader" INTEGER;
