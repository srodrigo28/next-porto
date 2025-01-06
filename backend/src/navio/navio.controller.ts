import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { NavioService } from './navio.service';
import { CreateNavioDto } from './dto/create-navio.dto';
import { UpdateNavioDto } from './dto/update-navio.dto';

@Controller('navio')
export class NavioController {
  constructor(private readonly navioService: NavioService) {}

  @Post()
  create(@Body() createNavioDto: CreateNavioDto) {
    return this.navioService.create(createNavioDto);
  }

  @Get()
  findAll() {
    return this.navioService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.navioService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateNavioDto: UpdateNavioDto) {
    return this.navioService.update(+id, updateNavioDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.navioService.remove(+id);
  }
}
