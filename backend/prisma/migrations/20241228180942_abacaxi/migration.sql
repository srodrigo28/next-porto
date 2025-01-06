/*
  Warnings:

  - Added the required column `codigo` to the `categoria` table without a default value. This is not possible if the table is not empty.
  - Made the column `nome` on table `categoria` required. This step will fail if there are existing NULL values in that column.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_categoria" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "codigo" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "ativo" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_categoria" ("ativo", "createdAt", "id", "nome", "updatedAt") SELECT "ativo", "createdAt", "id", "nome", "updatedAt" FROM "categoria";
DROP TABLE "categoria";
ALTER TABLE "new_categoria" RENAME TO "categoria";
CREATE UNIQUE INDEX "categoria_codigo_key" ON "categoria"("codigo");
CREATE UNIQUE INDEX "categoria_nome_key" ON "categoria"("nome");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
