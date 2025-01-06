-- CreateTable
CREATE TABLE "usuario" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "email" TEXT NOT NULL,
    "nome" TEXT,
    "senha" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "navio" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT,
    "ativo" TEXT
);

-- CreateTable
CREATE TABLE "porto" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT,
    "ativo" TEXT
);

-- CreateTable
CREATE TABLE "operador" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT,
    "ativo" TEXT
);

-- CreateTable
CREATE TABLE "exportador" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT,
    "ativo" TEXT
);

-- CreateTable
CREATE TABLE "operacao" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT,
    "ativo" TEXT
);

-- CreateTable
CREATE TABLE "destino" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT,
    "ativo" TEXT
);

-- CreateTable
CREATE TABLE "carga" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT,
    "valor" DECIMAL,
    "ativo" TEXT
);

-- CreateTable
CREATE TABLE "funcao" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "idFun" TEXT,
    "nome" TEXT,
    "ativo" TEXT
);

-- CreateTable
CREATE TABLE "categoria" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT,
    "ativo" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "ocorrencia" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT,
    "ativo" TEXT
);

-- CreateTable
CREATE TABLE "funcionario" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "matricula" TEXT,
    "nome" TEXT,
    "idcategoria" INTEGER,
    "admissao" DATETIME,
    "telefone" TEXT,
    "email" TEXT NOT NULL,
    "image" TEXT,
    "ativo" TEXT,
    "obs" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "periodo" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT,
    "ativo" TEXT
);

-- CreateTable
CREATE TABLE "localizacao" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT
);

-- CreateTable
CREATE TABLE "diatrabalhado" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT
);

-- CreateTable
CREATE TABLE "ponto" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "idnavio" INTEGER,
    "idporto" INTEGER,
    "idoperacao" INTEGER,
    "idoperador" INTEGER,
    "idlocalizacao" INTEGER,
    "iddiatrab" INTEGER,
    "datamovto" DATETIME,
    "viagem" TEXT,
    "idlistacarga" INTEGER
);

-- CreateTable
CREATE TABLE "listacarga" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "idponto" INTEGER,
    "nome" TEXT,
    "idcarga" INTEGER,
    "iddestino" INTEGER,
    "codigomarca" TEXT,
    "quantidade" INTEGER,
    "peso" DECIMAL,
    "metro" DECIMAL,
    "data" DATETIME
);

-- CreateTable
CREATE TABLE "listafuncionario" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "idponto" INTEGER,
    "terno" TEXT,
    "idfuncionario" INTEGER,
    "idfuncao" INTEGER,
    "periodos" TEXT,
    "data" DATETIME
);

-- CreateTable
CREATE TABLE "taxasemana" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "iddia" TEXT,
    "idperiodo" INTEGER,
    "taxachefe" DECIMAL,
    "taxaprancha" DECIMAL,
    "perc_aumento" INTEGER
);

-- CreateTable
CREATE TABLE "taxaindividual" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "valor" DECIMAL,
    "obs" TEXT
);

-- CreateIndex
CREATE UNIQUE INDEX "usuario_email_key" ON "usuario"("email");

-- CreateIndex
CREATE UNIQUE INDEX "funcao_idFun_key" ON "funcao"("idFun");

-- CreateIndex
CREATE UNIQUE INDEX "funcionario_matricula_key" ON "funcionario"("matricula");

-- CreateIndex
CREATE UNIQUE INDEX "funcionario_email_key" ON "funcionario"("email");
