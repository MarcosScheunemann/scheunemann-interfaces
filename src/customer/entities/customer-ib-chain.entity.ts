import { ISubscriptionCustomer } from '../../subscription-customer';
import { ECustomerStatus } from '../enums';
import { ICustomerIbChain, ITermsAndPrivacy } from '../interfaces';
import { CustomerEntity } from './customer.entity';
import { TermsAndPrivacyEntity } from './terms-and-pricacy.entity';

export class CustomerIbChainEntity extends CustomerEntity implements ICustomerIbChain {
  public blockedReason: string | null = null;
  public status: ECustomerStatus = ECustomerStatus.ACTIVE;
  public subscription: ISubscriptionCustomer | null = null;
  public subscriptionId: string | null = null;
  public pass: string | null = null;
  public onboardingAt: Date | null = null;
  public lastAccessAt: Date | null = null;
  public termsAndPrivacy: ITermsAndPrivacy = new TermsAndPrivacyEntity()

  constructor(data?: Partial<CustomerIbChainEntity>) {
    super(data);
    if (data) {
      for (let key in data) {
        if (data.hasOwnProperty(key) && key in this) {
          (this as any)[key] = (data as any)[key];
        }
      }
    }
  }
}
