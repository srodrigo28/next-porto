import { IsEmpty, IsNotEmpty, IsString } from "class-validator";

export class CreateExportadorDto {
    @IsString()
    @IsNotEmpty({message: "Esse campo é obrigatório !"})
    nome: string;

    @IsString()
    @IsNotEmpty({message: "Esse campo Ativo é obrigatório !"})
    ativo:  string;
  }