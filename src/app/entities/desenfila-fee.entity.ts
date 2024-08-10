import { EDesenfilaFrom } from '../../general';
import { IDesenfilaFee } from '../interfaces/i-desenfila-fee';

export class DesenfilaFeeEntity implements IDesenfilaFee {
  // #region Properties (2)

  public type: EDesenfilaFrom = EDesenfilaFrom.DEFAULT;
  public value: number = 0.0099;

  // #endregion Properties (2)

  // #region Constructors (1)

  constructor(data?: Partial<DesenfilaFeeEntity>) {
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
