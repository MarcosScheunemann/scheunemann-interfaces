import { ISubscriptionCustomer } from '../../subscription-customer';
import { ECustomerStatus } from '../enums';
import { ICustomer } from './i-customer';
import { ITermsAndPrivacy } from './i-terms-and-privacy';

export interface ICustomerIbChain extends ICustomer {
  blockedReason: string | null;
  status: ECustomerStatus;

  subscription: ISubscriptionCustomer | null;
  subscriptionId: string | null;

  pass: string | null;

  onboardingAt: Date | null;
  lastAccessAt: Date | null;

  termsAndPrivacy: ITermsAndPrivacy;
}
