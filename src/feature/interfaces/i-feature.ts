import { EAppMode } from '../../app';

export interface IFeature {
  // #region Properties (11)

  appId: string;
  appMode: EAppMode | null;
  companyId: string;
  containerId: string;
  createdAt: Date;
  deviceId: string;
  id: string;
  installationId: string;
  name: string;
  planId: string | null;
  subscriptionId: string;

  // #endregion Properties (11)
}
