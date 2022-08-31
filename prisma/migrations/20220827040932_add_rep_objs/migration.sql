/*
  Warnings:

  - The `requiredQuests` column on the `TarkovQuests` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "TarkovQuests" ADD COLUMN     "reputation" DOUBLE PRECISION,
ADD COLUMN     "reputationTrader" INTEGER,
DROP COLUMN "requiredQuests",
ADD COLUMN     "requiredQuests" INTEGER[];
