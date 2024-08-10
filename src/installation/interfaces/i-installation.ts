import { AppConfigType } from '../../app';
import { ESubscriptionStatus } from '../../subscription-base';
import { IInstallationApp } from './i-installation-app';

export interface IInstallation {
  // #region Properties (13)

  app: IInstallationApp;
  createdAt: Date;
  customConfig: AppConfigType;
  featureId: string;
  containerId: string;
  companyId: string;
  partnerId: string;
  customerId: string;
  deviceId: string;
  id: string;
  status: ESubscriptionStatus;
  subscriptionId: string;
  tags: string[];
  updatedAt: Date;

  // #endregion Properties (13)
}
