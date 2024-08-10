import { IEvolutionQrcode } from '../interfaces';

export class EvolutionQrcodeEntity implements IEvolutionQrcode {
  // #region Properties (4)

  public base64: string | null = null;
  public code: string | null = null;
  public count: number = 0;
  public pairingCode: string | null = null;

  // #endregion Properties (4)

  // #region Constructors (1)

  constructor(data?: Partial<EvolutionQrcodeEntity>) {
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
