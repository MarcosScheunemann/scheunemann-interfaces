import { EDocType, IAddress } from '../../general';
import { EMemberType } from '../../member';
import { ISubscriptionCustomer } from '../../subscription-customer';
import { ECustomerStatus } from '../enums';
import { ICustomerIbChain } from '../interfaces';
import { CustomerEntity } from './customer.entity';

export class CustomerIbChainEntity extends CustomerEntity implements ICustomerIbChain {
public blockedReason: string | null = null;
public status: ECustomerStatus = ECustomerStatus.ACTIVE;
public subscription: ISubscriptionCustomer | null = null;
public subscriptionId: string | null = null;
 

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
