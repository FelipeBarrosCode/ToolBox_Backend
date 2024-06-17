-- CreateTable
CREATE TABLE "Exercises" (
    "id" TEXT NOT NULL,
    "urlToBeUsed" TEXT NOT NULL,
    "Name" TEXT NOT NULL,
    "Acceptabiliy" INTEGER NOT NULL,
    "paidOnly" BOOLEAN NOT NULL,

    CONSTRAINT "Exercises_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Projects" (
    "id" TEXT NOT NULL,
    "projectName" TEXT NOT NULL,

    CONSTRAINT "Projects_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProjectCategory" (
    "id" TEXT NOT NULL,
    "categoryName" TEXT NOT NULL,

    CONSTRAINT "ProjectCategory_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Exercises_urlToBeUsed_key" ON "Exercises"("urlToBeUsed");

-- CreateIndex
CREATE UNIQUE INDEX "Exercises_Name_key" ON "Exercises"("Name");

-- CreateIndex
CREATE UNIQUE INDEX "Projects_projectName_key" ON "Projects"("projectName");

-- CreateIndex
CREATE UNIQUE INDEX "ProjectCategory_categoryName_key" ON "ProjectCategory"("categoryName");

-- AddForeignKey
ALTER TABLE "Projects" ADD CONSTRAINT "Projects_projectName_fkey" FOREIGN KEY ("projectName") REFERENCES "ProjectCategory"("categoryName") ON DELETE RESTRICT ON UPDATE CASCADE;
