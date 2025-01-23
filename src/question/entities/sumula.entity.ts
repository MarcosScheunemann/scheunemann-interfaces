import { EThirdLevelCases, ETributeTax } from '../enums';
import { ISumula } from '../interfaces';

export class SumulaEntity implements ISumula {
  // #region Properties (5)

  public id: string = '';
  public description: string = '';
  public name: string = '';
  public thrirdLevelCase: EThirdLevelCases = EThirdLevelCases.REPETICAO_INDEBITO;
  public taxCase: ETributeTax = ETributeTax.IRPF;
  public createdAt: Date = new Date();
  public updatedAt: Date = new Date();
  public active: boolean = true;

  // #endregion Properties (5)

  // #region Constructors (1)

  constructor(data?: Partial<SumulaEntity>) {
    if (data) {
      for (let key in data) {
        if (data.hasOwnProperty(key) && key in this) {
          (this as any)[key] = (data as any)[key];
        }
      }
    }
  }

  // #endregion Constructors (1)
}
