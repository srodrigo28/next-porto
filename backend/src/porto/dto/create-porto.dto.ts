import { IsEmpty, IsNotEmpty, IsString } from "class-validator";

export class CreatePortoDto {
  @IsString()
  @IsNotEmpty({message: "Esse campo é obrigatório !"})
  nome: string;

  @IsString()
  @IsNotEmpty({message: "Esse campo Ativo é obrigatório !"})
  ativo:  string;
}
