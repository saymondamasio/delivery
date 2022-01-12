/*
  Warnings:

  - Added the required column `destination_latitude` to the `deliveries` table without a default value. This is not possible if the table is not empty.
  - Added the required column `destination_longitude` to the `deliveries` table without a default value. This is not possible if the table is not empty.
  - Added the required column `origin_latitude` to the `deliveries` table without a default value. This is not possible if the table is not empty.
  - Added the required column `origin_longitude` to the `deliveries` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "deliveries" ADD COLUMN     "destination_latitude" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "destination_longitude" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "origin_latitude" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "origin_longitude" DOUBLE PRECISION NOT NULL;
