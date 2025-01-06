import { Injectable } from '@nestjs/common';
import { CreateFuncionarioDto } from './dto/create-funcionario.dto';
import { PrismaService } from 'src/db/prisma.service';
import { UpdateFuncionarioDto } from './dto/update-funcionario.dto';
import { ErrorFuncionario } from './erros/ErrorFuncionario';

@Injectable()
export class FuncionarioService {
  constructor ( private readonly prismaService: PrismaService) {}

  async create(createFuncionarioDto: CreateFuncionarioDto) {
    const productExists = await this.prismaService.funcionarios.findFirst ({
     where: { nome: createFuncionarioDto.nome }
    });
    
  }

  findAll() {
    return this.prismaService.funcionarios.findMany;
  }

  findOne(id: number) {
    return this.prismaService.funcionarios.findUnique ({where: {id}});    
  }

  update(id: number, updateFuncionarioDto: UpdateFuncionarioDto) {
    return this.prismaService.funcionarios.update({where: {id},data:updateFuncionarioDto});
  }

  remove(id: number) {
    return this.prismaService.funcionarios.delete({where: {id}});
  }
}
