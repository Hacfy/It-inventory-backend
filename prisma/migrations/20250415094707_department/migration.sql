-- CreateTable
CREATE TABLE "HOD" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "collegeId" INTEGER NOT NULL,
    "adminId" INTEGER NOT NULL,

    CONSTRAINT "HOD_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "HOD_email_key" ON "HOD"("email");

-- AddForeignKey
ALTER TABLE "HOD" ADD CONSTRAINT "HOD_adminId_fkey" FOREIGN KEY ("adminId") REFERENCES "Admin"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "HOD" ADD CONSTRAINT "HOD_collegeId_fkey" FOREIGN KEY ("collegeId") REFERENCES "College"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
