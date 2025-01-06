import { CreateNavioDto } from './create-navio.dto';

export interface UpdateNavioDto extends Partial<CreateNavioDto> {
   id: number 
}