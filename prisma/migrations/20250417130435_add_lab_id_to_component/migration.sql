/*
  Warnings:

  - Made the column `labId` on table `Component` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Component" DROP CONSTRAINT "Component_labId_fkey";

-- AlterTable
ALTER TABLE "Component" ALTER COLUMN "labId" SET NOT NULL;

-- CreateIndex
CREATE INDEX "Component_labId_idx" ON "Component"("labId");

-- CreateIndex
CREATE INDEX "Component_status_idx" ON "Component"("status");

-- AddForeignKey
ALTER TABLE "Component" ADD CONSTRAINT "Component_labId_fkey" FOREIGN KEY ("labId") REFERENCES "Lab"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
