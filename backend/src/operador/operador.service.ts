import { Injectable } from '@nestjs/common';
import { CreateOperadorDto } from './dto/create-operador.dto';
import { UpdateOperadorDto } from './dto/update-operador.dto';
import { PrismaService } from 'src/db/prisma.service';
import { ErroOperadorAlreadyExists } from './dto/erros/ErrorOperadorAlreadyExists';

@Injectable()

export class OperadorService {
  constructor (private readonly prismaService: PrismaService) {}
 
 async create(createOperadorDto: CreateOperadorDto) {
  const productExists = await this.prismaService.operadores.findFirst({
    where : {nome: createOperadorDto.nome}
  }); 
 
  if (productExists) {
    throw new ErroOperadorAlreadyExists(createOperadorDto.nome); 
  }
    return this.prismaService.operadores.create({data: createOperadorDto});
  }

  findAll() {
    return this.prismaService.operadores.findMany();
  }

  findOne(id: number) {
    return this.prismaService.operadores.findUnique({where: {id}});
  }

  update(id: number, updateOperadorDto: UpdateOperadorDto) {
    return this.prismaService.operadores.update({where: {id},data:updateOperadorDto});
  }

  remove(id: number) {
    return this.prismaService.operadores.delete({where: {id}});
  }
}
