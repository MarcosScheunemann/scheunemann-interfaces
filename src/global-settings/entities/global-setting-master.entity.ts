import { IGlobalSettingMaster } from '../interfaces/i-global-setting-master';

export class GlobalSettingMasterEntity implements IGlobalSettingMaster {
  // #region Properties (20)

  public deleteInvoicesPlacedDays: number = 10;
  public deleteSubscriptionsCompanyPlacedDays: number = 2;
  public deleteSubscriptionsCustomerPlacedDays: number = 2;
  public subscriptionSuspendedTimes: number = 3;
  public subscriptionsCompanyBillingDays: number = 6;
  public subscriptionsCompanyCancelDays: number = 1;
  public subscriptionsCompanyExpireDays: number = 1;
  public subscriptionsCompanySuspendDays: number = 1;
  public subscriptionsCustomerBillingDays: number = 7;
  public subscriptionsCustomerSuspendDays: number = 1;
  public waServerApikey: string = '';
  public waServerBaseUrl: string = '';
  public waServerGlobalKey: string = '';
  public waServerInstanceName: string = '';
  public waServerNumber: string = '';

  // #endregion Properties (20)

  // #region Constructors (1)

  constructor(data?: Partial<GlobalSettingMasterEntity>) {
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
