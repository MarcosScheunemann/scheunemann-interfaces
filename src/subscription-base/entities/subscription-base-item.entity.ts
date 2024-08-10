import { ISubscriptionBaseItem } from '../interfaces';

export class SubscriptionBaseItemEntity implements ISubscriptionBaseItem {
  // #region Properties (6)

  public description: string = '';
  public quantity: number = 1;
  public recurrent: boolean = true;
  public totalPrice: number = 0;
  public unitPrice: number = 0;
  public voucherKey: string | null = null;

  // #endregion Properties (6)

  // #region Constructors (1)

  constructor(data?: Partial<SubscriptionBaseItemEntity>) {
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
