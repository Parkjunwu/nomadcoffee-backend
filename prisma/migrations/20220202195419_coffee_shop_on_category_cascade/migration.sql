/*
  Warnings:

  - You are about to drop the `_CategoryToCoffeeShop` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_CategoryToCoffeeShop" DROP CONSTRAINT "_CategoryToCoffeeShop_A_fkey";

-- DropForeignKey
ALTER TABLE "_CategoryToCoffeeShop" DROP CONSTRAINT "_CategoryToCoffeeShop_B_fkey";

-- DropTable
DROP TABLE "_CategoryToCoffeeShop";

-- CreateTable
CREATE TABLE "CoffeeShopOnCategory" (
    "coffeeShopId" INTEGER NOT NULL,
    "categoryId" INTEGER NOT NULL,

    CONSTRAINT "CoffeeShopOnCategory_pkey" PRIMARY KEY ("coffeeShopId","categoryId")
);

-- AddForeignKey
ALTER TABLE "CoffeeShopOnCategory" ADD CONSTRAINT "CoffeeShopOnCategory_coffeeShopId_fkey" FOREIGN KEY ("coffeeShopId") REFERENCES "CoffeeShop"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CoffeeShopOnCategory" ADD CONSTRAINT "CoffeeShopOnCategory_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
