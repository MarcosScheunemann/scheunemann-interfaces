import { IPaymentPix } from '../interfaces';

export class PaymentPixEntity implements IPaymentPix {
  // #region Properties (2)

  public pixKey: string = '';
  public urlQrImage: string = '';

  // #endregion Properties (2)

  // #region Constructors (1)

  constructor(data?: Partial<PaymentPixEntity>) {
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
