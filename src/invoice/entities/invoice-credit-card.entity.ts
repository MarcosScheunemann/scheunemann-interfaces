import { IInvoiceCreditCard } from '../interfaces/i-invoice-credit-card';

export class InvoiceCreditCardEntity implements IInvoiceCreditCard {
  // #region Properties (6)

  public bin: string = '';
  public brand: string = '';
  public capturedAt: string = '';
  public last4: string = '';
  public tid: string = '';
  public transaction: string = '';

  // #endregion Properties (6)

  // #region Constructors (1)

  constructor(data?: Partial<InvoiceCreditCardEntity>) {
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
