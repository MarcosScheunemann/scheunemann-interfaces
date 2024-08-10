import { IBlueSoftBrand } from './i-bluesoft-brand';
import { IBlueSoftGtin } from './i-bluesoft-gtin';
import { IBlueSoftNcm } from './i-bluesoft-ncm';

export interface IBlueSoft {
  // #region Properties (17)

  avgPrice: number;
  barcodeImage: string;
  description: string;
  grossWeight: number | null;
  gtin: number;
  brand: IBlueSoftBrand;
  gtins: IBlueSoftGtin[];
  height: number | null;
  length: number | null;
  maxPrice: number;
  minPrice: number;
  netWeight: number | null;
  origin: string;
  ncm: IBlueSoftNcm;
  price: string;
  releaseDate: null;
  thumbnail: string;
  updateAt: Date;
  width: number | null;

  // #endregion Properties (17)
}
