-- CreateTable
CREATE TABLE "HOD" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "collegeId" INTEGER NOT NULL,
    "adminId" INTEGER NOT NULL,
    "role" "Role" NOT NULL DEFAULT 'HOD',

    CONSTRAINT "HOD_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_HODDepartments" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,

    CONSTRAINT "_HODDepartments_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE UNIQUE INDEX "HOD_email_key" ON "HOD"("email");

-- CreateIndex
CREATE INDEX "_HODDepartments_B_index" ON "_HODDepartments"("B");

-- AddForeignKey
ALTER TABLE "HOD" ADD CONSTRAINT "HOD_adminId_fkey" FOREIGN KEY ("adminId") REFERENCES "Admin"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "HOD" ADD CONSTRAINT "HOD_collegeId_fkey" FOREIGN KEY ("collegeId") REFERENCES "College"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_HODDepartments" ADD CONSTRAINT "_HODDepartments_A_fkey" FOREIGN KEY ("A") REFERENCES "Department"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_HODDepartments" ADD CONSTRAINT "_HODDepartments_B_fkey" FOREIGN KEY ("B") REFERENCES "HOD"("id") ON DELETE CASCADE ON UPDATE CASCADE;
