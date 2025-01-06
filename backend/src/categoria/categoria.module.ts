import { Module, OnModuleInit } from '@nestjs/common';
import { CategoriaService } from './categoria.service';
import { CategoriaController } from './categoria.controller';
import { DbModule } from 'src/db/db.module';
import { PrismaService } from 'src/db/prisma.service';

@Module({
  imports: [DbModule],
  controllers: [CategoriaController],
  providers: [CategoriaService],
})
export class CategoriaModule implements OnModuleInit {
  constructor(
    private prismaService: PrismaService,
    private categoriaService: CategoriaService
  ){}

  async onModuleInit() {
    const categorias = new Array(5)
      .fill(0)
      .map((_, index) => index + 1)

    await this.prismaService.categorias.deleteMany();

    for(const categoriaIndex of categorias){
      await this.categoriaService.create({
        nome: `Nome: ${categoriaIndex}`,
        codigo: `Codigo: ${categoriaIndex}`,
        ativo: `Ativo: ${categoriaIndex}`
      })
    }
  }

}