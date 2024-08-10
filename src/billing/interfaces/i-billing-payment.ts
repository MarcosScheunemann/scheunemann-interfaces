import { ICompany } from '../../company';
import { EPaymentStatus, EPaymentType } from '../../general';

export interface IBillingPayment {
  // #region Properties (13)

  addition: number;
  cancelled: number;
  company: Partial<ICompany>;
  discount: number;
  id: string;
  paymentReceiptUrl: string;
  paymentType: EPaymentType;
  status: EPaymentStatus;
  subtotal: number;
  tax: number;
  totalAmount: number;
  transactionDate: Date;
  transactionId: string;

  
}
