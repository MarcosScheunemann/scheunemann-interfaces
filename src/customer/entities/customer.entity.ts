import { EDocType, IAddress } from '../../general';
import { EMemberType } from '../../member';
import { ICustomer } from '../interfaces';

export class CustomerEntity implements ICustomer {
  
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
  type: EMemberType = EMemberType.CUSTOMER;

  constructor(data?: Partial<CustomerEntity>) {
    if (data) {
      for (let key in data) {
        if (data.hasOwnProperty(key) && key in this) {
          (this as any)[key] = (data as any)[key];
        }
      }
    }
  }

  // #endregion Constructors (1)
}
