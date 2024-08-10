import { EIntervalType } from '../../general';
import { IInvoice } from '../../invoice';
import { ISubscriptionBase } from '../../subscription-base';
import { ICustomerCreditLimit } from './i-customer-credit-limit';
import { ISubscriptionCustomerProfile } from './i-subscription-customer';

export interface ISubscriptionCustomer extends ISubscriptionBase {
  customerCreditLimit: ICustomerCreditLimit[];
  customerId: string | null;
  customerInterval: EIntervalType;
  openedInvoices: IInvoice[];
  preferedDueDate: number;
  profile: ISubscriptionCustomerProfile;
}
