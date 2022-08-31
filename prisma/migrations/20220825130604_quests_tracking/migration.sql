-- CreateTable
CREATE TABLE "UserQuests" (
    "id" SERIAL NOT NULL,
    "questId" TEXT NOT NULL,
    "questName" TEXT NOT NULL,
    "questTrader" TEXT NOT NULL,
    "questComplete" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "UserQuests_pkey" PRIMARY KEY ("id")
);
