import { IBase } from '../../general';
import { ETributeTax } from '../enums/tribute-tax.enum';

export interface ISumula extends IBase {
  description: string;
  name: string;
  taxCase: ETributeTax;
  questionId: string;
}
