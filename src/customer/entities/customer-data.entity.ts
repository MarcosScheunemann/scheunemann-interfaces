import { EDocType, IAddress } from '../../general';
import { ICustomerData } from '../interfaces/i-customer-data';

export class CustomerDataEntity implements ICustomerData {
  public address: IAddress | null = null;
  public doc: string = '';
  public docType: EDocType = EDocType.CPF;
  public name: string = '';
  public internationalCode: string = '+55';
  public phoneNumber: string = '';
  public email: string = '';

  constructor(data?: Partial<CustomerDataEntity>) {
    if (data) {
      for (let key in data) {
        if (data.hasOwnProperty(key) && key in this) {
          (this as any)[key] = (data as any)[key];
        }
      }
    }
  }
}
