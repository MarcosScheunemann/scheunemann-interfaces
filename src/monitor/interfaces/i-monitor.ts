import { IAppInfo } from '../../purchases';

export interface IMonitor {
  // #region Properties (11)

  id: string;
  companies: { id: string; name: string }[];
  total: number;
  createdAt: Date;
  app: IAppInfo;
}
