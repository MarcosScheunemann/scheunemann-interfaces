import { EIntervalType, EPaymentType, IBase, ICustomVariable, IPayment } from '../../general';
import { IInvoice } from '../../invoice';
import { ESubscriptionStatus } from '../enums';
import { ISubscriptionBaseItem } from './i-subscription-base-item';
import { ISubscriptionBaseLog } from './i-subscription-base-log';

export interface ISubscriptionBase extends IBase{
  amount: number;
  cancellationReason: string;
  customVariables: ICustomVariable[];
  expiresAt: Date;
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
  suspendedTimes?: number;
}
