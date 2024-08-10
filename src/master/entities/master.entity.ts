import { IMaster } from '../interfaces/i-master';
import { IMasterV1 } from '../interfaces/i-master-v1';

export class MasterEntity implements IMaster {
  // #region Properties (9)

  public catalog: string | null = null;
  public companyId: string = '';
  public containerId: string = '';
  public database: string | null = null;
  public hostName: string | null = null;
  public hostUrl: string | null = null;
  public masterV1: IMasterV1 | null = null;
  public password: string | null = null;
  public userName: string | null = null;

  // #endregion Properties (9)

  // #region Constructors (1)

  constructor(data?: Partial<MasterEntity>) {
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
