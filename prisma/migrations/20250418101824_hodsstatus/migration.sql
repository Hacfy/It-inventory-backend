/*
  Warnings:

  - You are about to drop the column `adminId` on the `Department` table. All the data in the column will be lost.
  - You are about to drop the column `departmentId` on the `Department` table. All the data in the column will be lost.
  - You are about to drop the column `hodId` on the `Department` table. All the data in the column will be lost.
  - You are about to drop the column `role` on the `HOD` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Department" DROP CONSTRAINT "Department_adminId_fkey";

-- DropForeignKey
ALTER TABLE "Department" DROP CONSTRAINT "Department_hodId_fkey";

-- DropIndex
DROP INDEX "Department_departmentId_key";

-- AlterTable
ALTER TABLE "Department" DROP COLUMN "adminId",
DROP COLUMN "departmentId",
DROP COLUMN "hodId";

-- AlterTable
ALTER TABLE "HOD" DROP COLUMN "role";

-- CreateTable
CREATE TABLE "_AdminToDepartment" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,

    CONSTRAINT "_AdminToDepartment_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateTable
CREATE TABLE "_ComponentToDepartment" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,

    CONSTRAINT "_ComponentToDepartment_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateTable
CREATE TABLE "_DepartmentHODs" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,

    CONSTRAINT "_DepartmentHODs_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE INDEX "_AdminToDepartment_B_index" ON "_AdminToDepartment"("B");

-- CreateIndex
CREATE INDEX "_ComponentToDepartment_B_index" ON "_ComponentToDepartment"("B");

-- CreateIndex
CREATE INDEX "_DepartmentHODs_B_index" ON "_DepartmentHODs"("B");

-- AddForeignKey
ALTER TABLE "_AdminToDepartment" ADD CONSTRAINT "_AdminToDepartment_A_fkey" FOREIGN KEY ("A") REFERENCES "Admin"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AdminToDepartment" ADD CONSTRAINT "_AdminToDepartment_B_fkey" FOREIGN KEY ("B") REFERENCES "Department"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ComponentToDepartment" ADD CONSTRAINT "_ComponentToDepartment_A_fkey" FOREIGN KEY ("A") REFERENCES "Component"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ComponentToDepartment" ADD CONSTRAINT "_ComponentToDepartment_B_fkey" FOREIGN KEY ("B") REFERENCES "Department"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_DepartmentHODs" ADD CONSTRAINT "_DepartmentHODs_A_fkey" FOREIGN KEY ("A") REFERENCES "Department"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_DepartmentHODs" ADD CONSTRAINT "_DepartmentHODs_B_fkey" FOREIGN KEY ("B") REFERENCES "HOD"("id") ON DELETE CASCADE ON UPDATE CASCADE;
