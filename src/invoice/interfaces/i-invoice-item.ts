export interface IInvoiceItem {
  // #region Properties (9)

  companyId: string;
  createdAt: Date;
  description: string;
  isRefunded: boolean;
  quantity: number;
  reference: string | null;
  totalPrice: number;
  unitPrice: number;
  updatedAt: Date;

  // #endregion Properties (9)
}
