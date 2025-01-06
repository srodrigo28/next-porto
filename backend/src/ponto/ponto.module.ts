import { Module } from '@nestjs/common';
import { PontoService } from './ponto.service';
import { PontoController } from './ponto.controller';

@Module({
  controllers: [PontoController],
  providers: [PontoService],
})
export class PontoModule {}
