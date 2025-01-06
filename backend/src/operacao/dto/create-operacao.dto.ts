import { IsEmpty, IsNotEmpty, IsString } from "class-validator";

export class CreateOperacaoDto {
    @IsString()
    @IsNotEmpty({message: "Esse campo é obrigatório !"})
    nome: string;
 
    @IsString()
    @IsNotEmpty ({message: "Esse Campo é Obrigatório !"})
    ativo: string;
}
