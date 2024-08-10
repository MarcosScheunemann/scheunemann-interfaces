import { EPaymentType, IPaymentProvider } from '../../general';
import { IOrder } from '../../order';
import { EInvoiceStatus } from '../enums';
import { IInvoiceBankSlip } from './i-invoice-bank-slip';
import { IInvoiceCreditCard } from './i-invoice-credit-card';
import { IInvoiceItem } from './i-invoice-item';
import { IInvoiceLog } from './i-invoice-log';
import { IInvoicePayer } from './i-invoice-payer';
import { IInvoicePix } from './i-invoice-pix';

export interface IInvoice {
  // #region Properties (43)

  addition: number;
  bankSlip: IInvoiceBankSlip | null;
  bankSlipExtraDue: number;
  ccEmails: string[];
  companyId: string;
  containerId: string;
  createdAt: Date;
  creditCard: IInvoiceCreditCard | null;
  currency: string;
  customerId: string | null;
  discount: number;
  dueDateAt: Date;
  email: string;
  ensureDueOnWorkday: boolean;
  externalInvoiceId: string;
  externalInvoiceUrl: string;
  id: string;
  items: IInvoiceItem[];
  logs: IInvoiceLog[];
  notes: string;
  notificationUrl: string;
  orderId: string;
  orders: IOrder[] | null;
  paidAt: Date | null;
  partnerId: string | null;
  password: string | null;
  payer: IInvoicePayer;
  paymentMethod: EPaymentType;
  paymentProvider: IPaymentProvider | null;
  phoneNumbersNotification: string[];
  pix: IInvoicePix | null;
  returnExpiredUrl: string;
  returnUrl: string;
  sandbox: boolean;
  status: EInvoiceStatus;
  subTotal: number;
  subscriptionId: string;
  totalAmount: number;
  totalFee: number;
  totalOverPaid: number;
  totalPaid: number;
  totalRefunded: number;
  updatedAt: Date;

  // #endregion Properties (43)
}
