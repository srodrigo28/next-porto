import { IsNotEmpty, IsString } from "class-validator";

export class CreateFuncaoDto {
    @IsString()
    @IsNotEmpty({ message: "Esse campo é obrigatório!" })
    idFun: string;
    
    @IsNotEmpty({ message: "Esse campo é obrigatório!" })
    @IsString()
    nome: string;
    
    @IsString()
    @IsNotEmpty({ message: "Esse campo é obrigatório!" })
    ativo: string;
}