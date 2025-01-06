import { Injectable } from '@nestjs/common';
import { CreateCategoriaDto } from './dto/create-categoria.dto';
import { PrismaService } from 'src/db/prisma.service';
import { UpdateCategoriaDto } from './dto/update-categoria.dto';
import { ErrorCategoriaAlreadyExists } from './erros/ErrorCategoriaAlreadyExists';

@Injectable()
export class CategoriaService {
  constructor( private readonly prismaService: PrismaService ){}
  
    async create(createCategoriaDto: CreateCategoriaDto) {

      const productExists = await this.prismaService.categorias.findFirst({
        where: { nome: createCategoriaDto.nome }
      })

      if(productExists){
        throw new ErrorCategoriaAlreadyExists(createCategoriaDto.nome);
      }

      return this.prismaService.categorias.create({
        data: createCategoriaDto,
      });
      
    }

    findAll(){
      return this.prismaService.categorias.findMany();
    }

    findOne(id: number){
      return this.prismaService.categorias.findUnique({
        where: {id}
      });
    }

    update(id: number, updateCategoriaDto: UpdateCategoriaDto){
      return this.prismaService.categorias.update({
        where: {id},
        data:updateCategoriaDto
      })
    }

    remove(id:number){
      return this.prismaService.categorias.delete({
        where: { id }
      });
    }
  }