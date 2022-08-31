-- CreateEnum
CREATE TYPE "Locales" AS ENUM ('en', 'ru', 'cs');

-- CreateTable
CREATE TABLE "QuestUnlocks" (
    "modelId" TEXT NOT NULL,
    "unlockedItemId" TEXT,

    CONSTRAINT "QuestUnlocks_pkey" PRIMARY KEY ("modelId")
);

-- CreateTable
CREATE TABLE "QuestObjectives" (
    "modelId" TEXT NOT NULL,
    "type" TEXT,
    "target" TEXT,
    "number" INTEGER,
    "location" INTEGER,
    "id" INTEGER,

    CONSTRAINT "QuestObjectives_pkey" PRIMARY KEY ("modelId")
);

-- CreateTable
CREATE TABLE "TarkovQuests" (
    "modelId" TEXT NOT NULL,
    "questId" INTEGER,
    "requiredLevel" INTEGER DEFAULT 1,
    "requiredQuests" TEXT,
    "title" TEXT,
    "locales" "Locales" DEFAULT 'en',
    "wikiLink" TEXT,
    "experience" DOUBLE PRECISION DEFAULT 0,
    "giver" INTEGER,
    "questGameID" BIGINT,

    CONSTRAINT "TarkovQuests_pkey" PRIMARY KEY ("modelId")
);

-- AddForeignKey
ALTER TABLE "QuestUnlocks" ADD CONSTRAINT "QuestUnlocks_modelId_fkey" FOREIGN KEY ("modelId") REFERENCES "TarkovQuests"("modelId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "QuestObjectives" ADD CONSTRAINT "QuestObjectives_modelId_fkey" FOREIGN KEY ("modelId") REFERENCES "TarkovQuests"("modelId") ON DELETE RESTRICT ON UPDATE CASCADE;
