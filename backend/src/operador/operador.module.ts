import { Module } from '@nestjs/common';
import { OperadorService } from './operador.service';
import { OperadorController } from './operador.controller';
import { DbModule } from 'src/db/db.module';
import { PrismaService } from 'src/db/prisma.service';

@Module({
  imports : [DbModule],
  controllers: [OperadorController],
  providers: [OperadorService],
})
export class OperadorModule {
  constructor (
    private prismaService: PrismaService,
    private operadorService: OperadorService){}
}
