import { IsEmpty, IsNotEmpty, IsString } from "class-validator"

export class CreateCategoriaDto {
    
    @IsString()
    @IsNotEmpty({message: "Esse campo Código é  obrigatório"})
    codigo: string;
    
    @IsString()
    @IsNotEmpty({message: "Esse campo Nome é  obrigatório"})
    nome:   string;

    @IsString()
    @IsNotEmpty({message: "Esse campo Ativo é  obrigatório"})
    ativo:  string
}
