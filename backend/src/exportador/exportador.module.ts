import { Module, OnModuleInit } from '@nestjs/common';
import { ExportadorService } from './exportador.service';
import { ExportadorController } from './exportador.controller';
import { DbModule } from 'src/db/db.module';
import { PrismaService } from 'src/db/prisma.service';

@Module({
  imports: [DbModule],
  controllers: [ExportadorController],
  providers: [ExportadorService],
})
export class ExportadorModule implements OnModuleInit{
 constructor (
              private prismaService: PrismaService,
              private exportadorService: ExportadorService){}

async onModuleInit() {}
};
