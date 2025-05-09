import { IAddress } from '../../general';
import { EMemberType } from '../../member';
import { ICustomerData } from './i-customer-data';

export interface ICustomer extends ICustomerData {
  sandbox: boolean;
  address: IAddress | null;
  createdAt: Date;
  id: string;
  imageUrl: string | null;
  tags: string[];
  updatedAt: Date;
  type: EMemberType;
  emailVerified?: boolean;
  emailVerifiedAt?: Date | null;
  phoneNumberVerified?: boolean;
  phoneNumberVerifiedAt?: Date | null;
  phoneNumbersNotification?: string[];
}
