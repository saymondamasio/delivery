/*
  Warnings:

  - You are about to drop the column `id_deliveryman` on the `deliveries` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "deliveries" DROP CONSTRAINT "deliveries_id_deliveryman_fkey";

-- AlterTable
ALTER TABLE "deliveries" DROP COLUMN "id_deliveryman",
ADD COLUMN     "deliveryman_id" TEXT;

-- AddForeignKey
ALTER TABLE "deliveries" ADD CONSTRAINT "deliveries_deliveryman_id_fkey" FOREIGN KEY ("deliveryman_id") REFERENCES "deliveryman"("id") ON DELETE SET NULL ON UPDATE CASCADE;
