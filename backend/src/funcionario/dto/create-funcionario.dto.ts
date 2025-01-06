import { isEmpty, IsNotEmpty, isNotEmpty, IsString, isString } from "class-validator";

export class CreateFuncionarioDto {
   @IsString()
   @IsNotEmpty({message: "Esse campo é obrigatório !"}) 
   matricula: string;

   @IsString()
   @IsNotEmpty({message: "Esse campo é obrigatório !"}) 
   nome: string;

   @IsString()
   @IsNotEmpty({message: "Esse campo é obrigatório !"}) 
   idCategoria: string;

   @IsString()
   @IsNotEmpty({message: "Esse campo é  obrigatório"})
   ativo:  string;
}
