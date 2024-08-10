import { IInvoiceLog } from '../interfaces/i-invoice-log';

export class InvoiceLogEntity implements IInvoiceLog {
  // #region Properties (4)

  public createdAt: string = '';
  public description: string = '';
  public id: string = '';
  public notes: string = '';

  // #endregion Properties (4)

  // #region Constructors (1)

  constructor(data?: Partial<InvoiceLogEntity>) {
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
