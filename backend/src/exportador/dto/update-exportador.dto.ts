import { PartialType } from '@nestjs/mapped-types';
import { CreateExportadorDto } from './create-exportador.dto';

export interface UpdateExportadorDto extends Partial<CreateExportadorDto> {
 id: number;
}
