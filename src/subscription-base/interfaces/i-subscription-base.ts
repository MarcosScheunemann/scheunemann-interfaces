import { EIntervalType, EPaymentType, ICustomVariable, IPayment } from '../../general';
import { IInvoice } from '../../invoice';
import { ESubscriptionStatus } from '../enums';
import { ISubscriptionBaseItem } from './i-subscription-base-item';
import { ISubscriptionBaseLog } from './i-subscription-base-log';

export interface ISubscriptionBase {
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
  phoneNumbersNotification?: string[];
  recentInvoices?: IInvoice[];
  startsAt: Date;
  status: ESubscriptionStatus;
  tags: string[];
  updatedAt: Date;
  suspendedTimes?: number;
}
