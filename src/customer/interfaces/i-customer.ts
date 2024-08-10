import { EDocType, IAddress } from '../../general';

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

  emailVerified?: boolean;
  emailVerifiedAt?: Date | null;
  
  phoneNumberVerified?: boolean;
  phoneNumberVerifiedAt?: Date | null;
  phoneNumbersNotification?: string[];
}
