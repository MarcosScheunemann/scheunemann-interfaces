import { ISubscriptionBaseLog } from '../interfaces/i-subscription-base-log';

export class SubscriptionBaseLogEntity implements ISubscriptionBaseLog {
  // #region Properties (4)

  public createdAt: Date = new Date();
  public description: string = '';
  public id: string = '';
  public notes: string = '';

  // #endregion Properties (4)

  // #region Constructors (1)

  constructor(data?: Partial<SubscriptionBaseLogEntity>) {
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
