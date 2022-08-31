/*
  Warnings:

  - You are about to drop the column `questGameID` on the `TarkovQuests` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "TarkovQuests" DROP CONSTRAINT "TarkovQuests_questGameID_fkey";

-- AlterTable
ALTER TABLE "TarkovQuests" DROP COLUMN "questGameID",
ADD COLUMN     "userId" TEXT;

-- AddForeignKey
ALTER TABLE "TarkovQuests" ADD CONSTRAINT "TarkovQuests_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
