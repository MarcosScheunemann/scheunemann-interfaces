import { CustomerInfoEntity } from '../../master-setting';
import { SubscriptionBaseEntity } from '../../subscription-base';
import { ISubscriptionCustomer } from '../interfaces/i-subscription';
import { CustomerCreditLimitEntity } from './customer-credit-limit.entity';

export class SubscriptionCustomerEntity extends SubscriptionBaseEntity implements ISubscriptionCustomer {
  // #region Properties (9)

  public customerCreditLimit: CustomerCreditLimitEntity[] = [];
  public customerId: string | null = null;
  public profile: CustomerInfoEntity = new CustomerInfoEntity();


  constructor(data?: Partial<SubscriptionCustomerEntity>) {
    super(data);
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
