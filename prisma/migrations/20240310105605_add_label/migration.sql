-- CreateTable
CREATE TABLE "Label" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "color" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Label_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_LabelToTicket" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_LabelToTicket_AB_unique" ON "_LabelToTicket"("A", "B");

-- CreateIndex
CREATE INDEX "_LabelToTicket_B_index" ON "_LabelToTicket"("B");

-- AddForeignKey
ALTER TABLE "_LabelToTicket" ADD CONSTRAINT "_LabelToTicket_A_fkey" FOREIGN KEY ("A") REFERENCES "Label"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_LabelToTicket" ADD CONSTRAINT "_LabelToTicket_B_fkey" FOREIGN KEY ("B") REFERENCES "Ticket"("id") ON DELETE CASCADE ON UPDATE CASCADE;
