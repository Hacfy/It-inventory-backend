/*
  Warnings:

  - You are about to drop the column `updatedAt` on the `Component` table. All the data in the column will be lost.
  - Added the required column `updatedAt` to the `Staff` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Staff" DROP CONSTRAINT "Staff_adminId_fkey";

-- DropForeignKey
ALTER TABLE "Staff" DROP CONSTRAINT "Staff_collegeId_fkey";

-- AlterTable
ALTER TABLE "Component" DROP COLUMN "updatedAt";

-- AlterTable
ALTER TABLE "Staff" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL,
ALTER COLUMN "collegeId" DROP NOT NULL,
ALTER COLUMN "adminId" DROP NOT NULL;

-- CreateTable
CREATE TABLE "_ComponentToStaff" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,

    CONSTRAINT "_ComponentToStaff_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE INDEX "_ComponentToStaff_B_index" ON "_ComponentToStaff"("B");

-- AddForeignKey
ALTER TABLE "Staff" ADD CONSTRAINT "Staff_collegeId_fkey" FOREIGN KEY ("collegeId") REFERENCES "College"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Staff" ADD CONSTRAINT "Staff_adminId_fkey" FOREIGN KEY ("adminId") REFERENCES "Admin"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ComponentToStaff" ADD CONSTRAINT "_ComponentToStaff_A_fkey" FOREIGN KEY ("A") REFERENCES "Component"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ComponentToStaff" ADD CONSTRAINT "_ComponentToStaff_B_fkey" FOREIGN KEY ("B") REFERENCES "Staff"("id") ON DELETE CASCADE ON UPDATE CASCADE;
