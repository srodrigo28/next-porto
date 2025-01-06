import { PartialType } from '@nestjs/mapped-types';
import { CreatePontoDto } from './create-ponto.dto';

export class UpdatePontoDto extends PartialType(CreatePontoDto) {}
