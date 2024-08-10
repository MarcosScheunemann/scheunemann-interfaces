import { IBlueSoft } from '../../bluesoft';
import { IBlueSoftGtin } from '../../bluesoft/interfaces/i-bluesoft-gtin';
import { GTINTypeEnum } from '../enums';
import { EGtintype } from '../enums/gtin-type.enum';
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

  constructor(data?: Partial<ProductGlobalEntity>, bluesoft?: IBlueSoft) {
    if (bluesoft) {
      this.active = true;
      this.avgPrice = bluesoft.avgPrice;
      this.barcodeImage = bluesoft.barcodeImage;
      this.brand = new ProductBrandEntity(bluesoft.brand);
      this.cest = '';
      this.createdAt = new Date();
      this.description = bluesoft.description;
      this.grossWeight = bluesoft.grossWeight || 0;
      this.gtin = bluesoft.gtin || null;
      this.gtinType = EGtintype.FOURTEEN;
      this.height = bluesoft.height || 0;
      this.id = '';
      this.length = bluesoft.length || 0;
      this.maxPrice = bluesoft.maxPrice || 0;
      this.measureQuantity = this.getGtinFromGtins(bluesoft.gtin || 0, bluesoft.gtins)?.commercialUnit?.quantityPackaging || 1;
      this.measureUnit = this.getGtinFromGtins(bluesoft.gtin || 0, bluesoft.gtins)?.commercialUnit?.typePackaging || 'Unidade';
      this.minPrice = bluesoft.minPrice || 0;
      this.name = bluesoft.description || '';
      this.ncm = new ProductNcmEntity(bluesoft.ncm);
      this.netWeight = bluesoft.netWeight || 0;
      this.price = this.currencyStringToNumber(bluesoft.price);
      this.tags = [];
      this.thumbnail = bluesoft.thumbnail || '';
      this.updatedAt = new Date();
      this.width = bluesoft.width || 0;
    }
    if (data) {
      for (let key in data) {
        if (data.hasOwnProperty(key) && key in this) {
          (this as any)[key] = (data as any)[key];
        }
      }
    }
  }

  // #endregion Constructors (1)

  // #region Private Methods (1)

  private getGtinFromGtins(ref: number, gtins: IBlueSoftGtin[]): IBlueSoftGtin | null {
    for (let i = 0; i < gtins.length; i++) {
      if (gtins[i].gtin === ref) {
        return gtins[i];
      }
    }
    return null;
  }
  private currencyStringToNumber(value: string): number {
    return Number(value.replace(/[^0-9.-]+/g, ''));
  }

  // #endregion Private Methods (1)
}
