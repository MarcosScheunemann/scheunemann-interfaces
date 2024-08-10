import { EIntervalType, EPaymentType, ICustomVariable, IPayment } from '../../general';
import { IInvoice } from '../../invoice';
import { ESubscriptionStatus } from '../enums';
import { ISubscriptionBaseItem } from './i-subscription-base-item';
import { ISubscriptionBaseLog } from './i-subscription-base-log';

export interface ISubscriptionBase {
  // #region Properties (23)

  amount: number;
  cancellationReason: string;
  createdAt: Date;
  customVariables: ICustomVariable[];
  expiresAt: Date;
  id: string;
  interval: number;
  intervalType: EIntervalType;
  invoices: IInvoice[];
  items: ISubscriptionBaseItem[];
  logs: ISubscriptionBaseLog[];
  notes: string;
  payment: IPayment;
  paymentType: EPaymentType;
  phoneNumbersNotification: string[];
  recentInvoices: IInvoice[];
  renewPaymentDate: Date;
  renovatedAt: Date;
  startsAt: Date;
  status: ESubscriptionStatus;
  suspendedTimes: number;
  tags: string[];
  updatedAt: Date;

  // #endregion Properties (23)
}
