import { Module } from '@nestjs/common';
import { DbModule } from './db/db.module';
import { CategoriaModule } from './categoria/categoria.module';
import { FuncaoModule } from './funcao/funcao.module';
import { FuncionarioModule } from './funcionario/funcionario.module';
import { NavioModule } from './navio/navio.module';
import { PortoModule } from './porto/porto.module';
import { OperadorModule } from './operador/operador.module';
import { OperacaoModule } from './operacao/operacao.module';
import { ExportadorModule } from './exportador/exportador.module';
import { PontoModule } from './ponto/ponto.module';

@Module({
  imports: [DbModule, CategoriaModule, FuncaoModule, FuncionarioModule, NavioModule, PortoModule, OperadorModule, OperacaoModule, ExportadorModule, PontoModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
