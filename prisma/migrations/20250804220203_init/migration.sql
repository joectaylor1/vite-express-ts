/*
  Warnings:

  - Made the column `guest_name` on table `User` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "public"."User" ALTER COLUMN "phone" DROP NOT NULL,
ALTER COLUMN "menu_choice" DROP NOT NULL,
ALTER COLUMN "dietry_requirements" DROP NOT NULL,
ALTER COLUMN "comments" DROP NOT NULL,
ALTER COLUMN "guest_name" SET NOT NULL;
