import { EBankSlipStatus } from '../../general';
import { IInvoiceBankSlip } from '../interfaces/i-invoice-bank-slip';

export class InvoiceBankSlipEntity implements IInvoiceBankSlip {
  // #region Properties (7)

  public bankSlipBank: number = 0;
  public bankSlipErrorCode: string = '';
  public bankSlipErrorMessage: string = '';
  public bankSlipStatus: string = EBankSlipStatus.PENDING;
  public barcode: string = '';
  public barcodeData: string = '';
  public digitableLine: string = '';

  // #endregion Properties (7)

  // #region Constructors (1)

  constructor(data?: Partial<InvoiceBankSlipEntity>) {
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
