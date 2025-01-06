import { PartialType } from '@nestjs/mapped-types';
import { CreatePortoDto } from './create-porto.dto';

export interface UpdatePortoDto extends Partial<CreatePortoDto> {
    id: number;
}