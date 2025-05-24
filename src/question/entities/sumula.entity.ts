import { BaseEntity } from '../../general';
import { ETributeTax } from '../enums';
import { ISumula } from '../interfaces';

export class SumulaEntity extends BaseEntity implements ISumula {
  public description: string = '';
  public name: string = '';
  public questionId: string = '';
  public taxCase: ETributeTax = ETributeTax.IRPF;

  constructor(data?: Partial<SumulaEntity>) {
    super(data);
    if (data) {
      for (let key in data) {
        if (data.hasOwnProperty(key) && key in this) {
          (this as any)[key] = (data as any)[key];
        }
      }
    }
  }
}
