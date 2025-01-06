import { IsNotEmpty, IsString } from "class-validator";

export class CreateNavioDto {
    @IsString()
    @IsNotEmpty ({message: "Esse Campo é Obrigatório !"})
    nome: string;

    @IsString()
    @IsNotEmpty ({message: "Esse Campo é Obrigatório !"})
    ativo: string;
}
