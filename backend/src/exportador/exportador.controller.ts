import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ExportadorService } from './exportador.service';
import { CreateExportadorDto } from './dto/create-exportador.dto';
import { UpdateExportadorDto } from './dto/update-exportador.dto';

@Controller('exportador')
export class ExportadorController {
  constructor(private readonly exportadorService: ExportadorService) {}

  @Post()
  create(@Body() createExportadorDto: CreateExportadorDto) {
    return this.exportadorService.create(createExportadorDto);
  }

  @Get()
  findAll() {
    return this.exportadorService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.exportadorService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateExportadorDto: UpdateExportadorDto) {
    return this.exportadorService.update(+id, updateExportadorDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.exportadorService.remove(+id);
  }
}