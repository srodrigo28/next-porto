import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PortoService } from './porto.service';
import { CreatePortoDto } from './dto/create-porto.dto';
import { UpdatePortoDto } from './dto/update-porto.dto';

@Controller('porto')
export class PortoController {
  constructor(private readonly portoService: PortoService) {}

  @Post()
  create(@Body() createPortoDto: CreatePortoDto) {
    return this.portoService.create(createPortoDto);
  }

  @Get()
  findAll() {
    return this.portoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.portoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePortoDto: UpdatePortoDto) {
    return this.portoService.update(+id, updatePortoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.portoService.remove(+id);
  }
}
