import { IDesenfilaToken } from '../interfaces/i-desenfila-token';

export class DesenfilaTokenEntity implements IDesenfilaToken {
  // #region Properties (2)

  public id: string = '';
  public prefix: string | null = '';
  public masterConfig: boolean = false;

  // #endregion Properties (2)

  // #region Constructors (1)

  constructor(data?: Partial<DesenfilaTokenEntity>) {
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
