-- AlterTable
ALTER TABLE "UserQuests" ADD COLUMN     "userId" TEXT;

-- AddForeignKey
ALTER TABLE "UserQuests" ADD CONSTRAINT "UserQuests_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
