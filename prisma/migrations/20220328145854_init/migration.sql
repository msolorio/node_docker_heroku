-- CreateTable
CREATE TABLE "Item" (
    "id" SERIAL NOT NULL,
    "content" TEXT NOT NULL,
    "complete" BOOLEAN NOT NULL,

    CONSTRAINT "Item_pkey" PRIMARY KEY ("id")
);
