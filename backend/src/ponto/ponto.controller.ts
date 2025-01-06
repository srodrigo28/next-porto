import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PontoService } from './ponto.service';
import { CreatePontoDto } from './dto/create-ponto.dto';
import { UpdatePontoDto } from './dto/update-ponto.dto';

@Controller('ponto')
export class PontoController {
  constructor(private readonly pontoService: PontoService) {}

  @Post()
  create(@Body() createPontoDto: CreatePontoDto) {
    return this.pontoService.create(createPontoDto);
  }

  @Get()
  findAll() {
    return this.pontoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.pontoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePontoDto: UpdatePontoDto) {
    return this.pontoService.update(+id, updatePontoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pontoService.remove(+id);
  }
}
