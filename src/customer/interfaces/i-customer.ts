import { EDocType, IAddress } from '../../general';
import { EMemberType } from '../../member';

export interface ICustomer {
  sandbox: boolean;
  address: IAddress | null;
  createdAt: Date;
  doc: string;
  docType: EDocType;
  email: string;
  id: string;
  internationalCode: string;
  phoneNumber: string;
  imageUrl: string | null;
  name: string;
  tags: string[];
  updatedAt: Date;
  type: EMemberType;
  emailVerified?: boolean;
  emailVerifiedAt?: Date | null;
  phoneNumberVerified?: boolean;
  phoneNumberVerifiedAt?: Date | null;
  phoneNumbersNotification?: string[];
}
