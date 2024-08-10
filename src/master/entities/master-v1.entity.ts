import { IMasterV1 } from '../interfaces/i-master-v1';

export class MasterV1Entity implements IMasterV1 {
  // #region Properties (1)

  public ie: string | null = null;

  // #endregion Properties (1)

  // #region Constructors (1)

  constructor(data?: Partial<MasterV1Entity>) {
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
