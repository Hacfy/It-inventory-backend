-- DropForeignKey
ALTER TABLE "Lab" DROP CONSTRAINT "Lab_adminId_fkey";

-- AlterTable
ALTER TABLE "Lab" ALTER COLUMN "adminId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Lab" ADD CONSTRAINT "Lab_adminId_fkey" FOREIGN KEY ("adminId") REFERENCES "Admin"("id") ON DELETE SET NULL ON UPDATE CASCADE;
