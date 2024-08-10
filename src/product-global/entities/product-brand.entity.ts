import { IProductBrand } from '../interfaces';

export class ProductBrandEntity implements IProductBrand {
  // #region Properties (2)

  public picture: string = '';
  public name: string = '';

  // #endregion Properties (2)

  // #region Constructors (1)

  constructor(data?: Partial<ProductBrandEntity>) {
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
