import { EDocType, IAddress } from '../../general';
import { EMemberType } from '../../member';
import { ISubscriptionCustomer } from '../../subscription-customer';
import { ECustomerStatus } from '../enums';
import { ICustomerIbChain } from '../interfaces';

export class CustomerIbChainEntity implements ICustomerIbChain {
  sandbox: boolean = false;
  address: IAddress | null = null;
  createdAt: Date = new Date();
  doc: string = '';
  docType: EDocType = EDocType.CPF;
  email: string = '';
  id: string = '';
  internationalCode: string = '+55';
  phoneNumber: string = '';
  imageUrl: string | null = null;
  name: string = '';
  tags: string[] = [];
  updatedAt: Date = new Date();
  emailVerified?: boolean | undefined = false;
  emailVerifiedAt?: Date | null | undefined = null;
  phoneNumberVerified?: boolean | undefined = false;
  phoneNumberVerifiedAt?: Date | null | undefined = null;
  phoneNumbersNotification?: string[] | undefined = [];
  blockedReason: string | null = null;
  status: ECustomerStatus = ECustomerStatus.ACTIVE;
  subscriptionId: string | null = null;
  subscription: ISubscriptionCustomer | null = null;
  type: EMemberType = EMemberType.ADMIN;

  constructor(data?: Partial<CustomerIbChainEntity>) {
    if (data) {
      for (let key in data) {
        if (data.hasOwnProperty(key) && key in this) {
          (this as any)[key] = (data as any)[key];
        }
      }
    }
  }

}
