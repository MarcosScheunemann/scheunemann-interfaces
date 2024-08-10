import { IBillingTotal } from '../interfaces';

export class BillingTotalEntity implements IBillingTotal {
  // #region Properties (6)

  public addition: number = 0;
  public cancelled: number = 0;
  public discount: number = 0;
  public subtotal: number = 0;
  public tax: number = 0;
  public totalAmount: number = 0;

  // #endregion Properties (6)

  // #region Constructors (1)

  constructor(data?: Partial<BillingTotalEntity>) {
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
