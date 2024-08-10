import { ECustomerInterval } from '../../customer';
import { IInvoice } from '../../invoice';
import { ISubscriptionBase } from '../../subscription-base';
import { ICustomerCreditLimit } from './i-customer-credit-limit';
import { ISubscriptionCustomerProfile } from './i-subscription-customer';

export interface ISubscriptionCustomer extends ISubscriptionBase {
  customerCreditLimit: ICustomerCreditLimit[];
  customerId: string | null;
  customerInterval: ECustomerInterval;
  openedInvoices: IInvoice[];
  preferedDueDate: number;
  profile: ISubscriptionCustomerProfile;
}
