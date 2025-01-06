import { Module, OnModuleInit } from '@nestjs/common';
import { FuncionarioService } from './funcionario.service';
import { FuncionarioController } from './funcionario.controller';
import { DbModule } from 'src/db/db.module';
import { PrismaService } from 'src/db/prisma.service';

@Module({
  imports :[DbModule],
  controllers: [FuncionarioController],
  providers: [FuncionarioService]
})

export class FuncionarioModule implements OnModuleInit {
  constructor(
    private prismaService: PrismaService,
    private funcionarioService: FuncionarioService
  ){}

  async onModuleInit() {
    const funcionarios = new Array(5)
    .fill(0)
    .map((_,index) => index + 1)

    await this.prismaService.funcionarios.deleteMany();
  }
}

