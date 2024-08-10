import { IMasterV1 } from './i-master-v1';

export interface IMaster {
  // #region Properties (8)

  catalog: string | null;
  companyId: string;
  containerId: string;
  database: string | null;
  hostName: string | null;
  hostUrl: string | null;
  password: string | null;
  userName: string | null;
  masterV1: IMasterV1 | null;

  // #endregion Properties (8)
}
