import { Module, OnModuleInit } from '@nestjs/common';
import { NavioService } from './navio.service';
import { NavioController } from './navio.controller';
import { DbModule } from 'src/db/db.module';
import { PrismaService } from 'src/db/prisma.service';

@Module({
  imports: [DbModule],
  controllers: [NavioController],
  providers: [NavioService],
})
export class NavioModule {
  constructor(
    private PrismaService: PrismaService,
    private navioService: NavioService         
  ){}
}
