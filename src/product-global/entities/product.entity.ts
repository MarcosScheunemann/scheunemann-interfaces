import { GTINTypeEnum } from '../enums';
import { IProductGlobal } from '../interfaces';
import { ProductBrandEntity } from './product-brand.entity';
import { ProductNcmEntity } from './product-ncm.entity';

export class ProductGlobalEntity implements IProductGlobal {
  // #region Properties (26)

  public active: boolean = true;
  public avgPrice: number = 0;
  public barcodeImage: string | null = null;
  public brand: ProductBrandEntity = new ProductBrandEntity();
  public cest: string | null = null;
  public createdAt: Date = new Date();
  public description: string = '';
  public grossWeight: number = 0;
  public gtin: number | null = null;
  public gtinType: GTINTypeEnum = GTINTypeEnum.THIRTEEN;
  public height: number = 0;
  public id: string = '';
  public length: number = 0;
  public maxPrice: number = 0;
  public measureQuantity: number = 1;
  public measureUnit: string = 'UN';
  public minPrice: number = 0;
  public name: string = '';
  public ncm: ProductNcmEntity = new ProductNcmEntity();
  public netWeight: number = 0;
  public createdBy: string = '';
  public price: number = 0;
  public tags: string[] = [];
  public thumbnail: string | null = null;
  public updatedAt: Date = new Date();
  public width: number = 0;

  // #endregion Properties (26)

  // #region Constructors (1)

  constructor(data?: Partial<ProductGlobalEntity>) {
    if (data) {
      for (let key in data) {
        if (data.hasOwnProperty(key) && key in this) {
          (this as any)[key] = (data as any)[key];
        }
      }
    }
  }

}
