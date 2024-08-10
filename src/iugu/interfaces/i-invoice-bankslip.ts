export interface IIuguInvoiceBankSlip {
  // #region Properties (7)

  bankSlipBank: number;
  bankSlipErrorCode: string | '00';
  bankSlipErrorMessage: string | null;
  bankSlipStatus: string | 'pending';
  barcode: string;
  barcodeData: string;
  digitableLine: string;

  // #endregion Properties (7)
}
