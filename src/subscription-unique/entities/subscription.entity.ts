import { CustomerDataEntity } from '../../customer/entities/customer-data.entity';
import { SubscriptionBaseEntity } from '../../subscription-base';
import { ISubscriptionUnique } from '../interfaces/i-subscription';


export class SubscriptionUniqueEntity extends SubscriptionBaseEntity implements ISubscriptionUnique {
  customerData: CustomerDataEntity = new CustomerDataEntity();
  key: string = '';

  constructor(data?: Partial<SubscriptionUniqueEntity>) {
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
