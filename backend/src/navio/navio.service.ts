
import { Injectable } from '@nestjs/common';
import { CreateNavioDto } from './dto/create-navio.dto';
import { UpdateNavioDto } from './dto/update-navio.dto';
import { PrismaService } from 'src/db/prisma.service';
import { ErrorNavioAlreadyExists } from './erros/ErrorNavioAlreadyExists';

@Injectable()
export class NavioService {
constructor (private readonly prismaService: PrismaService) {}

 async  create(createNavioDto: CreateNavioDto) {
  const navioExists = await this.prismaService.navios.findFirst({
   where : {nome: createNavioDto.nome} 
  });

  if(navioExists){
    throw new ErrorNavioAlreadyExists(createNavioDto.nome);
  }

  return this.prismaService.navios.create({
    data: createNavioDto,
  });
  }

  findAll() {
    return this.prismaService.navios.findMany();
  }

  findOne(id: number) {
    return this.prismaService.navios.findUnique({
     where :{ id }
    });
  }

  update(id: number, updateNavioDto: UpdateNavioDto) {
    return this.prismaService.navios.update({
      where: {id}, data: updateNavioDto
    });
  }

  remove(id: number) {
    return this.prismaService.navios.delete({
      where : {id}
    });
  }
}
