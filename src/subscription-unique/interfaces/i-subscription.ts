import { ISubscriptionBase } from '../../subscription-base';
import { ICustomerData } from '../../customer/interfaces/i-customer-data';

export interface ISubscriptionUnique extends ISubscriptionBase {
  customerData: ICustomerData;
  key: string;
}
