import { PartialType } from '@nestjs/mapped-types';
import { CreateFuncaoDto } from './create-funcao.dto';

export interface UpdateFuncaoDto extends Partial<CreateFuncaoDto> {
    id: number;
}