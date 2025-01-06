import { Injectable } from '@nestjs/common';
import { CreateFuncaoDto } from './dto/create-funcao.dto';
import { UpdateFuncaoDto } from './dto/update-funcao.dto';
import { PrismaService } from 'src/db/prisma.service';
import { erroFuncaoIdExists } from './erros/erroFuncaoIdExists';

@Injectable()
export class FuncaoService {
  constructor(private readonly prismaService: PrismaService){}

  async create(createFuncaoDto: CreateFuncaoDto) {
    const funcaoExists = await this.prismaService.funcoes.findFirst({
      where: { idFun: createFuncaoDto.idFun }
    })

    if(funcaoExists){
      throw new erroFuncaoIdExists(createFuncaoDto.idFun)
    }

    return this.prismaService.funcoes.create({
      data: createFuncaoDto
    });
  }

  findAll() {
   return this.prismaService.funcoes.findMany();
  }

  findOne(id: number) {
    return this.prismaService.funcoes.findUnique({
      where: { id }
    });
  }

  update(id: number, updateFuncaoDto: UpdateFuncaoDto) {
    return this.prismaService.funcoes.update({
      where: { id },
      data: updateFuncaoDto
    });
  }

  remove(id: number) {
    return this.prismaService.funcoes.delete({
      where: { id }
    });
  }
}
