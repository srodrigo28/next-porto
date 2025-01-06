import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { categoriaNomeFilter } from './categoria/filters/categoriaNomeFilter';
import { filterFuncaoIdExists } from './funcao/filters/filterFuncaoIdExists';

async function bootstrap() {

  const app = await NestFactory.create( AppModule, { cors: true }); // acesso ai por endereços externos

  app.useGlobalFilters(
    new categoriaNomeFilter(),
    new filterFuncaoIdExists(),
  )

  app.useGlobalPipes(
    new ValidationPipe( { errorHttpStatusCode: 422} )
  )

  await app.listen(process.env.PORT ?? 8080);
}
bootstrap();
