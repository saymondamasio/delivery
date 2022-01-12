/*
  Warnings:

  - You are about to drop the `deliveryman` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "deliveries" DROP CONSTRAINT "deliveries_deliveryman_id_fkey";

-- DropTable
DROP TABLE "deliveryman";

-- CreateTable
CREATE TABLE "deliverymen" (
    "id" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "deliverymen_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "deliverymen_username_key" ON "deliverymen"("username");

-- AddForeignKey
ALTER TABLE "deliveries" ADD CONSTRAINT "deliveries_deliveryman_id_fkey" FOREIGN KEY ("deliveryman_id") REFERENCES "deliverymen"("id") ON DELETE SET NULL ON UPDATE CASCADE;
