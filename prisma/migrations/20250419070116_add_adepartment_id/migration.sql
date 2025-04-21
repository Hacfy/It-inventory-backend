-- CreateTable
CREATE TABLE "_ComponentToDepartment" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,

    CONSTRAINT "_ComponentToDepartment_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE INDEX "_ComponentToDepartment_B_index" ON "_ComponentToDepartment"("B");

-- AddForeignKey
ALTER TABLE "_ComponentToDepartment" ADD CONSTRAINT "_ComponentToDepartment_A_fkey" FOREIGN KEY ("A") REFERENCES "Component"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ComponentToDepartment" ADD CONSTRAINT "_ComponentToDepartment_B_fkey" FOREIGN KEY ("B") REFERENCES "Department"("id") ON DELETE CASCADE ON UPDATE CASCADE;
