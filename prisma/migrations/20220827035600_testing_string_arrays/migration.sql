-- DropForeignKey
ALTER TABLE "QuestObjectives" DROP CONSTRAINT "QuestObjectives_TQuestsModelId_fkey";

-- DropForeignKey
ALTER TABLE "QuestUnlocks" DROP CONSTRAINT "QuestUnlocks_TQuestsModelId_fkey";

-- AlterTable
ALTER TABLE "TarkovQuests" ADD COLUMN     "objectives" TEXT[],
ADD COLUMN     "unlocks" TEXT[];
