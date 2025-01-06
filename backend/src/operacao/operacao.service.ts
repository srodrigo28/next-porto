import { Injectable } from '@nestjs/common';
import { CreateOperacaoDto } from './dto/create-operacao.dto';
import { UpdateOperacaoDto } from './dto/update-operacao.dto';
import { PrismaService } from 'src/db/prisma.service';
import { ErrorOperacaoAlreadyExists } from './dto/erros/ErrorOperacaoAlreadyExists';

@Injectable()
export class OperacaoService {
constructor (private readonly prismaService: PrismaService ){}

 async create(createOperacaoDto: CreateOperacaoDto) {
  const operacaoExists = await this.prismaService.operacoes.findFirst({
    where: {nome: createOperacaoDto.nome}
  });

  if(operacaoExists){
    throw new ErrorOperacaoAlreadyExists(createOperacaoDto.nome);
  }

  return this.prismaService.operacoes.create({
    data: createOperacaoDto,
  });
  }

  findAll() {
    return this.prismaService.operacoes.findMany();
  }

  findOne(id: number) {
    return this.prismaService.operacoes.findUnique({
      where: {id}});
  }

  update(id: number, updateOperacaoDto: UpdateOperacaoDto) {
    return this.prismaService.operacoes.update({
      where : {id}, data: updateOperacaoDto});
  }

  remove(id: number) {
    return this.prismaService.operacoes.delete({
      where: {id}});
  }
}
