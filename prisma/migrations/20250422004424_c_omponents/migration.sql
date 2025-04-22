-- CreateEnum
CREATE TYPE "ComponentType" AS ENUM ('MONITOR', 'KEYBOARD', 'MOUSE', 'CPU', 'PRINTER', 'OTHER');

-- CreateEnum
CREATE TYPE "Status" AS ENUM ('WORKING', 'FAULTY', 'UNDER_REPAIR', 'REPLACED');

-- CreateTable
CREATE TABLE "Component" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "brand" TEXT NOT NULL,
    "modelNumber" TEXT NOT NULL,
    "serialNumber" TEXT NOT NULL,
    "collegeId" INTEGER NOT NULL,
    "warehouseId" INTEGER NOT NULL,
    "adminId" INTEGER NOT NULL,
    "labId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "status" "Status" NOT NULL DEFAULT 'WORKING',
    "type" "ComponentType" NOT NULL,

    CONSTRAINT "Component_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_ComponentToDepartment" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,

    CONSTRAINT "_ComponentToDepartment_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE UNIQUE INDEX "Component_modelNumber_key" ON "Component"("modelNumber");

-- CreateIndex
CREATE UNIQUE INDEX "Component_serialNumber_key" ON "Component"("serialNumber");

-- CreateIndex
CREATE INDEX "Component_labId_idx" ON "Component"("labId");

-- CreateIndex
CREATE INDEX "Component_status_idx" ON "Component"("status");

-- CreateIndex
CREATE INDEX "_ComponentToDepartment_B_index" ON "_ComponentToDepartment"("B");

-- AddForeignKey
ALTER TABLE "Component" ADD CONSTRAINT "Component_adminId_fkey" FOREIGN KEY ("adminId") REFERENCES "Admin"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Component" ADD CONSTRAINT "Component_collegeId_fkey" FOREIGN KEY ("collegeId") REFERENCES "College"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Component" ADD CONSTRAINT "Component_warehouseId_fkey" FOREIGN KEY ("warehouseId") REFERENCES "Warehouse"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Component" ADD CONSTRAINT "Component_labId_fkey" FOREIGN KEY ("labId") REFERENCES "Lab"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ComponentToDepartment" ADD CONSTRAINT "_ComponentToDepartment_A_fkey" FOREIGN KEY ("A") REFERENCES "Component"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ComponentToDepartment" ADD CONSTRAINT "_ComponentToDepartment_B_fkey" FOREIGN KEY ("B") REFERENCES "Department"("id") ON DELETE CASCADE ON UPDATE CASCADE;
