/*
  Warnings:

  - The `questGameID` column on the `TarkovQuests` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "TarkovQuests" DROP COLUMN "questGameID",
ADD COLUMN     "questGameID" INTEGER;

-- AddForeignKey
ALTER TABLE "TarkovQuests" ADD CONSTRAINT "TarkovQuests_questGameID_fkey" FOREIGN KEY ("questGameID") REFERENCES "UserQuests"("id") ON DELETE SET NULL ON UPDATE CASCADE;
