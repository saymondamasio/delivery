/*
  Warnings:

  - You are about to drop the column `item_name` on the `deliveries` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[item_id]` on the table `deliveries` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `item_id` to the `deliveries` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "deliveries" DROP COLUMN "item_name",
ADD COLUMN     "item_id" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "items" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "items_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "items_name_key" ON "items"("name");

-- CreateIndex
CREATE UNIQUE INDEX "deliveries_item_id_key" ON "deliveries"("item_id");

-- AddForeignKey
ALTER TABLE "deliveries" ADD CONSTRAINT "deliveries_item_id_fkey" FOREIGN KEY ("item_id") REFERENCES "items"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
