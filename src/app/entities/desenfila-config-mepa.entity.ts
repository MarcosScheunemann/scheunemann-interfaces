import { IDesenfilaConfigMercadoPago } from '../interfaces/i-desenfila-config-mepa';

export class DesenfilaConfigMercadoPagoEntity implements IDesenfilaConfigMercadoPago {
  // #region Properties (4)

  public active: boolean = false;
  public automationFee: number = 0;
  public fee: number = 0;
  public mobyoFee: number = 0;

  // #endregion Properties (4)

  // #region Constructors (1)

  constructor(data?: Partial<DesenfilaConfigMercadoPagoEntity>) {
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
