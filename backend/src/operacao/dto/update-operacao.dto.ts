import { PartialType } from '@nestjs/mapped-types';
import { CreateOperacaoDto } from './create-operacao.dto';

export interface UpdateOperacaoDto extends Partial<CreateOperacaoDto> {
    id: number
};
