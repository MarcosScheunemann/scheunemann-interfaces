import { ProductContainerEntity } from '../../product-container';
import { IProductCompany } from '../interfaces';

export class ProductCompanyEntity extends ProductContainerEntity implements IProductCompany {
  // #region Properties (6)

  public companyId: string = '';

  // #endregion Properties (6)

  // #region Constructors (1)

  constructor(data?: Partial<ProductCompanyEntity>) {
    super(data);
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
