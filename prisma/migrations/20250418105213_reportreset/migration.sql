/*
  Warnings:

  - You are about to drop the `_AdminToDepartment` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_ComponentToDepartment` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_DepartmentHODs` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[modelNumber]` on the table `Component` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[departmentId]` on the table `Department` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `adminId` to the `Department` table without a default value. This is not possible if the table is not empty.
  - Added the required column `departmentId` to the `Department` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "_AdminToDepartment" DROP CONSTRAINT "_AdminToDepartment_A_fkey";

-- DropForeignKey
ALTER TABLE "_AdminToDepartment" DROP CONSTRAINT "_AdminToDepartment_B_fkey";

-- DropForeignKey
ALTER TABLE "_ComponentToDepartment" DROP CONSTRAINT "_ComponentToDepartment_A_fkey";

-- DropForeignKey
ALTER TABLE "_ComponentToDepartment" DROP CONSTRAINT "_ComponentToDepartment_B_fkey";

-- DropForeignKey
ALTER TABLE "_DepartmentHODs" DROP CONSTRAINT "_DepartmentHODs_A_fkey";

-- DropForeignKey
ALTER TABLE "_DepartmentHODs" DROP CONSTRAINT "_DepartmentHODs_B_fkey";

-- AlterTable
ALTER TABLE "Department" ADD COLUMN     "adminId" INTEGER NOT NULL,
ADD COLUMN     "departmentId" TEXT NOT NULL,
ADD COLUMN     "hodId" INTEGER;

-- AlterTable
ALTER TABLE "HOD" ADD COLUMN     "role" "Role" NOT NULL DEFAULT 'HOD';

-- DropTable
DROP TABLE "_AdminToDepartment";

-- DropTable
DROP TABLE "_ComponentToDepartment";

-- DropTable
DROP TABLE "_DepartmentHODs";

-- CreateIndex
CREATE UNIQUE INDEX "Component_modelNumber_key" ON "Component"("modelNumber");

-- CreateIndex
CREATE UNIQUE INDEX "Department_departmentId_key" ON "Department"("departmentId");

-- AddForeignKey
ALTER TABLE "Department" ADD CONSTRAINT "Department_adminId_fkey" FOREIGN KEY ("adminId") REFERENCES "Admin"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Department" ADD CONSTRAINT "Department_hodId_fkey" FOREIGN KEY ("hodId") REFERENCES "HOD"("id") ON DELETE SET NULL ON UPDATE CASCADE;
