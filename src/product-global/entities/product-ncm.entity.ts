import { IProductNcm } from '../interfaces';

export class ProductNcmEntity implements IProductNcm {
  // #region Properties (3)

  public code: string = '';
  public description: string = '';
  public fullDescription: string = '';
  public ex: string | null = null;

  // #endregion Properties (3)

  // #region Constructors (1)

  constructor(data?: Partial<ProductNcmEntity>) {
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
