import { EDocType } from '../../general';
import { ISubscriptionCustomerProfile } from '../interfaces/i-subscription-customer';

export class SubscriptionCustomerProfileEntity implements ISubscriptionCustomerProfile {
  // #region Properties (8)

  public doc: string | null = '';
  public docType: EDocType = EDocType.CNPJ;
  public email: string | null = '';
  public id: string | null = '';
  public imageUrl: string | null = '';
  public name: string | null = '';
  public phoneNumber: string | null = '';
  public uid: string | null = '';

  // #endregion Properties (8)

  // #region Constructors (1)

  constructor(data?: Partial<SubscriptionCustomerProfileEntity>) {
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
