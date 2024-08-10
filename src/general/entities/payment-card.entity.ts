import { IPaymentCard } from '../interfaces';

export class PaymentCardEntity implements IPaymentCard {
  // #region Properties (3)

  public brand: string = '';
  public maskedNumber: string = '';
  public tokenId: string = '';

  // #endregion Properties (3)

  // #region Constructors (1)

  constructor(data?: Partial<PaymentCardEntity>) {
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
