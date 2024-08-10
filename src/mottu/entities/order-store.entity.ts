import { IMottuOrderStore } from '../interfaces';

export class MottuOrderStoreEntity implements IMottuOrderStore {
  // #region Properties (1)

  public userMottuId: number = 0;

  // #endregion Properties (1)

  // #region Constructors (1)

  constructor(data?: Partial<MottuOrderStoreEntity>) {
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
