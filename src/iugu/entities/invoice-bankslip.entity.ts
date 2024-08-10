/* eslint-disable id-blacklist */
import { IIuguInvoiceBankSlip } from '../interfaces/i-invoice-bankslip';

export class IuguInvoiceBankSlipEntity implements IIuguInvoiceBankSlip {
  // #region Properties (7)

  public bankSlipBank: number = 0;
  public bankSlipErrorCode: string = '00';
  public bankSlipErrorMessage: string | null = null;
  public bankSlipStatus: string = 'pending';
  public barcode: string = '';
  public barcodeData: string = '';
  public digitableLine: string = '';

  // #endregion Properties (7)

  // #region Constructors (1)

  constructor(data?: Partial<IuguInvoiceBankSlipEntity>) {
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
