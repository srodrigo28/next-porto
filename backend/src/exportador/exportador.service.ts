import { Injectable } from '@nestjs/common';
import { CreateExportadorDto } from './dto/create-exportador.dto';
import { UpdateExportadorDto } from './dto/update-exportador.dto';
import { PrismaService } from 'src/db/prisma.service';
import { ErrorExportadorAlreadyExists } from './erros/ErrorExportadorAlreadyExists';

@Injectable()
export class ExportadorService {
 constructor (private readonly prismaService: PrismaService){}

 async create(createExportadorDto: CreateExportadorDto) {
  const exportadorExists = await this.prismaService.exportadores.findFirst({
    where: {nome: createExportadorDto.nome}
  });

  if (exportadorExists) {
    throw new ErrorExportadorAlreadyExists(createExportadorDto.nome);
  }
  return this.prismaService.exportadores.create({data:createExportadorDto});
  }

  findAll() {
    return this.prismaService.exportadores.findMany();
  }

  findOne(id: number) {
    return this.prismaService.exportadores.findUnique({where: {id}});
  }

  update(id: number, updateExportadorDto: UpdateExportadorDto) {
    return this.prismaService.exportadores.update({where: {id}, data:updateExportadorDto});
  }

  remove(id: number) {
    return this.prismaService.exportadores.delete({where:{id}});
  }
}
