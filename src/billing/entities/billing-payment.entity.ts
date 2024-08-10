import { ICompany } from '../../company';
import { EPaymentStatus, EPaymentType } from '../../general';
import { IBillingPayment } from '../interfaces';

export class BillingPaymentEntity implements IBillingPayment {
  // #region Properties (13)

  public addition: number = 0;
  public cancelled: number = 0;
  public company: Partial<ICompany> = {};
  public discount: number = 0;
  public id: string = '';
  public paymentReceiptUrl: string = '';
  public paymentType: EPaymentType = EPaymentType.NONE;
  public status: EPaymentStatus = EPaymentStatus.PENDING;
  public subtotal: number = 0;
  public tax: number = 0;
  public totalAmount: number = 0;
  public transactionDate: Date = new Date();
  public transactionId: string = '';

  // #endregion Properties (13)

  // #region Constructors (1)

  constructor(data?: Partial<BillingPaymentEntity>) {
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
