import { Injectable } from '@nestjs/common';
import { CreatePortoDto } from './dto/create-porto.dto';
import { UpdatePortoDto } from './dto/update-porto.dto';
import { PrismaService } from 'src/db/prisma.service';
import { ErrorPortoAlreadyExists } from './erros/ErrorPortoAlreadyExists';

@Injectable()

export class PortoService {
  constructor (private readonly prismaService: PrismaService){}

async create(createPortoDto: CreatePortoDto) {

  const productExists = await this.prismaService.portos.findFirst({
    where: {nome: createPortoDto.nome}
  })

    if (productExists) {
      throw new ErrorPortoAlreadyExists(createPortoDto.nome);
      }
       return this.prismaService.portos.create({data:createPortoDto});
  }

  findAll() {
    return this.prismaService.portos.findMany();
  }

  findOne(id: number) {
    return this.prismaService.portos.findUnique({
      where: {id}
    });
  }

  update(id: number, updatePortoDto: UpdatePortoDto) {
    return this.prismaService.portos.update({
      where:{id},data:updatePortoDto
    });
  }

  remove(id: number) {
    return this.prismaService.portos.delete({
      where: {id}
    });
  }
}
