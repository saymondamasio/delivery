/*
  Warnings:

  - Added the required column `position_latitude` to the `deliverymen` table without a default value. This is not possible if the table is not empty.
  - Added the required column `position_longitude` to the `deliverymen` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "deliverymen" ADD COLUMN     "is_available" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "position_latitude" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "position_longitude" DOUBLE PRECISION NOT NULL;
