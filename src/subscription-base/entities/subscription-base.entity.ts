import { CustomVariableEntity, EIntervalType, EPaymentType, PaymentEntity } from '../../general';
import { IInvoice } from '../../invoice';
import { ESubscriptionStatus } from '../enums';
import { ISubscriptionBase } from '../interfaces/i-subscription-base';
import { SubscriptionBaseItemEntity } from './subscription-base-item.entity';
import { SubscriptionBaseLogEntity } from './subscription-base-log.entity';

export class SubscriptionBaseEntity implements ISubscriptionBase {
  public amount: number = 0;
  public cancellationReason: string = '';
  public createdAt: Date = new Date();
  public customVariables: CustomVariableEntity[] = [];
  public expiresAt: Date = new Date();
  public id: string = '';
  public interval: number = 0;
  public intervalType: EIntervalType = EIntervalType.MONTHS;
  public invoices: IInvoice[] = [];
  public items: SubscriptionBaseItemEntity[] = [];
  public logs: SubscriptionBaseLogEntity[] = [];
  public notes: string = '';
  public phoneNumbersNotification: string[] = [];
  public recentInvoices: IInvoice[] = [];
  public startsAt: Date = new Date();
  public status: ESubscriptionStatus = ESubscriptionStatus.PENDING;
  public suspendedTimes: number = 0;
  public tags: string[] = [];
  public updatedAt: Date = new Date();

  // #endregion Properties (23)

  // #region Constructors (1)

  constructor(data?: Partial<SubscriptionBaseEntity>) {
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
