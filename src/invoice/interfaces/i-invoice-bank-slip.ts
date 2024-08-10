import { EBankSlipStatus } from '../../general';

export interface IInvoiceBankSlip {
  // #region Properties (7)

  bankSlipErrorCode: string | '00';
  bankSlipErrorMessage: string;
  bankSlipStatus: string | EBankSlipStatus;
  bankSlipBank: number;
  barcode: string;
  barcodeData: string;
  digitableLine: string;

  // #endregion Properties (7)
}
