import { ICustomerInfo } from '../../master-setting';
import { ISubscriptionBase } from '../../subscription-base';
import { ICustomerCreditLimit } from './i-customer-credit-limit';

export interface ISubscriptionCustomer extends ISubscriptionBase {
  customerCreditLimit: ICustomerCreditLimit[];
  customerId: string | null;
  profile: ICustomerInfo;
  planName : string
}
