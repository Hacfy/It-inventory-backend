/*
  Warnings:

  - A unique constraint covering the columns `[modelNumber]` on the table `Component` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[serialNumber]` on the table `Component` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateTable
CREATE TABLE "Report" (
    "id" SERIAL NOT NULL,
    "componentId" INTEGER NOT NULL,
    "hodId" INTEGER NOT NULL,
    "status" "Status" NOT NULL,
    "message" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Report_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Component_modelNumber_key" ON "Component"("modelNumber");

-- CreateIndex
CREATE UNIQUE INDEX "Component_serialNumber_key" ON "Component"("serialNumber");

-- AddForeignKey
ALTER TABLE "Report" ADD CONSTRAINT "Report_componentId_fkey" FOREIGN KEY ("componentId") REFERENCES "Component"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Report" ADD CONSTRAINT "Report_hodId_fkey" FOREIGN KEY ("hodId") REFERENCES "HOD"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
