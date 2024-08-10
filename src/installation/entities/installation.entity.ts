import { AppConfigType } from '../../app';
import { ESubscriptionStatus } from '../../subscription-base';
import { IInstallation } from '../interfaces/i-installation';
import { InstallationAppEntity } from './installation-app.entity';

export class InstallationEntity implements IInstallation {
  // #region Properties (14)

  public app: InstallationAppEntity = new InstallationAppEntity();
  public companyId: string = '';
  public containerId: string = '';
  public createdAt: Date = new Date();
  public customConfig: AppConfigType = null;
  public customerId: string = '';
  public deviceId: string = '';
  public featureId: string = '';
  public id: string = '';
  public partnerId: string = '';
  public status: ESubscriptionStatus = ESubscriptionStatus.PLACED;
  public subscriptionId: string = '';
  public tags: string[] = [];
  public updatedAt: Date = new Date();

  // #endregion Properties (14)

  // #region Constructors (1)

  constructor(data?: Partial<InstallationEntity>) {
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
