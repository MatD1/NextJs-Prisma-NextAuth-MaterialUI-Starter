/*
  Warnings:

  - The primary key for the `QuestObjectives` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `modelId` on the `QuestObjectives` table. All the data in the column will be lost.
  - The primary key for the `QuestUnlocks` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `modelId` on the `QuestUnlocks` table. All the data in the column will be lost.
  - The required column `objectiveModelId` was added to the `QuestObjectives` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - The required column `QuestmodelId` was added to the `QuestUnlocks` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.

*/
-- DropForeignKey
ALTER TABLE "QuestObjectives" DROP CONSTRAINT "QuestObjectives_modelId_fkey";

-- DropForeignKey
ALTER TABLE "QuestUnlocks" DROP CONSTRAINT "QuestUnlocks_modelId_fkey";

-- AlterTable
ALTER TABLE "QuestObjectives" DROP CONSTRAINT "QuestObjectives_pkey",
DROP COLUMN "modelId",
ADD COLUMN     "TQuestsModelId" TEXT,
ADD COLUMN     "objectiveModelId" TEXT NOT NULL,
ADD CONSTRAINT "QuestObjectives_pkey" PRIMARY KEY ("objectiveModelId");

-- AlterTable
ALTER TABLE "QuestUnlocks" DROP CONSTRAINT "QuestUnlocks_pkey",
DROP COLUMN "modelId",
ADD COLUMN     "QuestmodelId" TEXT NOT NULL,
ADD COLUMN     "TQuestsModelId" TEXT,
ADD CONSTRAINT "QuestUnlocks_pkey" PRIMARY KEY ("QuestmodelId");

-- AddForeignKey
ALTER TABLE "QuestUnlocks" ADD CONSTRAINT "QuestUnlocks_TQuestsModelId_fkey" FOREIGN KEY ("TQuestsModelId") REFERENCES "TarkovQuests"("modelId") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "QuestObjectives" ADD CONSTRAINT "QuestObjectives_TQuestsModelId_fkey" FOREIGN KEY ("TQuestsModelId") REFERENCES "TarkovQuests"("modelId") ON DELETE SET NULL ON UPDATE CASCADE;
