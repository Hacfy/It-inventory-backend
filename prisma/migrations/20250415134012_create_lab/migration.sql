/*
  Warnings:

  - You are about to drop the column `createdAt` on the `Staff` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `Staff` table. All the data in the column will be lost.
  - You are about to drop the `_ComponentToStaff` table. If the table is not empty, all the data it contains will be lost.
  - Made the column `collegeId` on table `Staff` required. This step will fail if there are existing NULL values in that column.
  - Made the column `adminId` on table `Staff` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Staff" DROP CONSTRAINT "Staff_adminId_fkey";

-- DropForeignKey
ALTER TABLE "Staff" DROP CONSTRAINT "Staff_collegeId_fkey";

-- DropForeignKey
ALTER TABLE "_ComponentToStaff" DROP CONSTRAINT "_ComponentToStaff_A_fkey";

-- DropForeignKey
ALTER TABLE "_ComponentToStaff" DROP CONSTRAINT "_ComponentToStaff_B_fkey";

-- AlterTable
ALTER TABLE "Component" ADD COLUMN     "labId" INTEGER,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "Staff" DROP COLUMN "createdAt",
DROP COLUMN "updatedAt",
ALTER COLUMN "collegeId" SET NOT NULL,
ALTER COLUMN "adminId" SET NOT NULL;

-- DropTable
DROP TABLE "_ComponentToStaff";

-- CreateTable
CREATE TABLE "Lab" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "departmentId" INTEGER NOT NULL,
    "adminId" INTEGER NOT NULL,

    CONSTRAINT "Lab_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Staff" ADD CONSTRAINT "Staff_adminId_fkey" FOREIGN KEY ("adminId") REFERENCES "Admin"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Staff" ADD CONSTRAINT "Staff_collegeId_fkey" FOREIGN KEY ("collegeId") REFERENCES "College"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Lab" ADD CONSTRAINT "Lab_departmentId_fkey" FOREIGN KEY ("departmentId") REFERENCES "Department"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Lab" ADD CONSTRAINT "Lab_adminId_fkey" FOREIGN KEY ("adminId") REFERENCES "Admin"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Component" ADD CONSTRAINT "Component_labId_fkey" FOREIGN KEY ("labId") REFERENCES "Lab"("id") ON DELETE SET NULL ON UPDATE CASCADE;
