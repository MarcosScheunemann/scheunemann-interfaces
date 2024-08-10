import { IInvoicePix } from '../interfaces/i-invoice-pix';

export class InvoicePixEntity implements IInvoicePix {
  // #region Properties (5)

  public expiresAt: Date = new Date();
  public qrCode: string = '';
  public qrCodeImage: string = '';
  public qrCodeText: string = '';
  public status: string = '';

  // #endregion Properties (5)

  // #region Constructors (1)

  constructor(data?: Partial<InvoicePixEntity>) {
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
