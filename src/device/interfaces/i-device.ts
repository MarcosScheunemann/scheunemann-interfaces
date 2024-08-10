import { EOs } from '../../general/enums/os.enum';
import { IInstallation } from '../../installation';

export interface IDevice {
  // #region Properties (14)
  active: boolean;
  companyId: string;
  containerId: string;
  createdAt: Date;
  deviceId: string;
  /** Deverá ser injetado nas requisições */
  installedApps?: IInstallation[];
  id: string;
  key: string;
  lastAccess: Date;
  os: EOs;
  osVersion: string;
  name: string;
  tags: string[];
  updatedAt: Date;

  // #endregion Properties (14)
}
