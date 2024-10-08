import { IPaymentCash } from '../interfaces';

export class PaymentCashEntity implements IPaymentCash {
  // #region Properties (1)

  public changeFor: number = 0;

  // #endregion Properties (1)

  // #region Constructors (1)

  constructor(data?: Partial<PaymentCashEntity>) {
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
