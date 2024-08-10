import { EDocType } from '../../general';
import { IOrderMerchant } from '../interfaces/i-merchant';

export class OrderMerchantEntity implements IOrderMerchant {
  // #region Properties (5)

  public description: string | null = null;
  public doc: string | null = null;
  public docType: EDocType | null = null;
  public id: string | null = null;
  public name: string | null = null;

  // #endregion Properties (5)

  // #region Constructors (1)

  constructor(data?: Partial<OrderMerchantEntity>) {
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
