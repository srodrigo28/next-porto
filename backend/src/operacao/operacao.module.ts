import { Module, OnModuleInit } from '@nestjs/common';
import { OperacaoService } from './operacao.service';
import { OperacaoController } from './operacao.controller';
import { DbModule } from 'src/db/db.module';
import { PrismaService } from 'src/db/prisma.service';
import { CreateOperacaoDto } from './dto/create-operacao.dto';

@Module({
  imports : [DbModule],
  controllers: [OperacaoController],
  providers: [OperacaoService],
})

export class OperacaoModule implements OnModuleInit{
  constructor (
    private prismaService: PrismaService,
    private operacaoService: OperacaoService
  ){}


  async onModuleInit() {
    // const operacoes = new Array(5)
    // .fill(0)
    // .map((_,index) => index + 1)
    // await this.prismaService.operacoes.deleteMany();
  }
}
