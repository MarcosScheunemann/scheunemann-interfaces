import { AddressEntity, PaymentProviderEntity } from '../../general';
import { EDocType } from '../../general/enums';
import { IPartner } from '../interfaces';

export class PartnerEntity implements IPartner {
  // #region Properties (18)

  public active: boolean = true;
  public address: AddressEntity = new AddressEntity();
  public doc: string = '';
  public docType: EDocType = EDocType.CNPJ;
  public email: string = '';
  public fullName: string = '';
  public id: string = '';
  public imageUrl?: string = '';
  public internationalCode: string = '';
  public level: number = 50;
  public logoUrl?: string = '';
  public name: string = '';
  public paymentProvider: PaymentProviderEntity = new PaymentProviderEntity();
  public phoneNumber: string = '';
  public sandbox: boolean = false;
  public tags: string[] = [];
  public updatedAt: Date = new Date();
  public version: string = '';

  // #endregion Properties (18)

  // #region Constructors (1)

  constructor(data?: Partial<PartnerEntity>) {
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
