import { AddressEntity, EDocType } from '../../general';
import { IInvoicePayer } from '../interfaces/i-invoice-payer';

export class InvoicePayerEntity implements IInvoicePayer {
  // #region Properties (6)

  public address: AddressEntity = new AddressEntity();
  public doc: string = '';
  public docType: EDocType = EDocType.CNPJ;
  public email: string = '';
  public internationalCode: string = '55';
  public name: string = '';
  public phoneNumber: string | null = null;

  // #endregion Properties (6)

  // #region Constructors (1)

  constructor(data?: Partial<InvoicePayerEntity>) {
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
