import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { OperacaoService } from './operacao.service';
import { CreateOperacaoDto } from './dto/create-operacao.dto';
import { UpdateOperacaoDto } from './dto/update-operacao.dto';

@Controller('operacao')
export class OperacaoController {
  constructor(private readonly operacaoService: OperacaoService) {}

  @Post()
  create(@Body() createOperacaoDto: CreateOperacaoDto) {
    return this.operacaoService.create(createOperacaoDto);
  }

  @Get()
  findAll() {
    return this.operacaoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.operacaoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateOperacaoDto: UpdateOperacaoDto) {
    return this.operacaoService.update(+id, updateOperacaoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.operacaoService.remove(+id);
  }
}
