import { IMottuStoreMatrix } from '../interfaces';

export class MottuStoreMatrixEntity implements IMottuStoreMatrix {
  // #region Properties (1)

  public id: number = 0;

  // #endregion Properties (1)

  // #region Constructors (1)

  constructor(data?: Partial<MottuStoreMatrixEntity>) {
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
