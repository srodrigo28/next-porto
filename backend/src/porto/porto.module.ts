import { Module, OnModuleInit } from '@nestjs/common';
import { PortoService } from './porto.service';
import { PortoController } from './porto.controller';
import { DbModule } from 'src/db/db.module';
import { PrismaService } from 'src/db/prisma.service';

@Module({
  imports: [DbModule],
  controllers: [PortoController],
  providers: [PortoService],
})
export class PortoModule {
  constructor (
    private prismaService: PrismaService,
    private portoService: PortoService) {}
}
