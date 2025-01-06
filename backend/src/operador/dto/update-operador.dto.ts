import { PartialType } from '@nestjs/mapped-types';
import { CreateOperadorDto } from './create-operador.dto';

export interface UpdateOperadorDto extends Partial<CreateOperadorDto> {
   id: number
}

