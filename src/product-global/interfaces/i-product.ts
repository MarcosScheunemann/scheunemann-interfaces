import { GTINTypeEnum } from '../enums';
import { IProductBrand } from './i-brand';
import { IProductNcm } from './i-ncm';

export interface IProductGlobal {
  // #region Properties (29)

  /**
   * Indicates whether the product is active.
   * @default true
   * @example true
   */
  active: boolean;
  /**
   * Average price of the product.
   * @example 1.5
   * @default 0
   * @minimum 0
   * @maximum 9999999999999.99
   */
  avgPrice: number;
  /**
   * Barcode of the product.
   * @example "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAgAElEQ…"
   * @default ""
   */
  barcodeImage: string | null;
  /**
   * Contains brand information of the product.
   * @example { "id": "5e4f1b1b1b1b1b1b1b1b1b1b", "name": "Brand name" }
   *
   */
  brand: IProductBrand;
  /**
   * CEST Code.
   * @minlength 7
   * @maxlength 7
   */
  cest: string | null;
  /**
   * Date of product creation.
   * @format date-time
   * @example "2019-01-01T00:00:00.000Z"
   * @default Date.now()
   * @readonly
   */
  createdAt: Date;
  /**
   * Description of the product or service.
   * @minlength 1
   * @maxlength 120
   * @example "Product description"
   */
  description: string;
  /**
   * Name of the user who created the product.
   * @minlength 1
   * @maxlength 120
   * @example "User name"
   */
  createdBy: string;

  /**
   * Gross weight of the product.
   * @example 1.5
   * @default 0
   */
  grossWeight: number | null;
  /**
   * To be filled with the GTIN-8, GTIN-12, GTIN-13 or GTIN-14 code
   * (old EAN, UPC and DUN-14 codes).
   * For products that do not have a bar code with GTIN,
   * the literal "WITHOUT GTIN" must be informed.
   * @minlength 1
   * @maxlength 14
   * @example "123456789"
   */
  gtin: number | null;
  /**
   * Type of GTIN.
   * @default GTINTypeEnum.GTIN_13
   * @minlength 1
   * @maxlength 8
   */
  gtinType: GTINTypeEnum;
  /**
   * Height of the product.
   * @example 15
   * @default 0
   */
  height: number | null;
  /**
   * Identifier of the product.
   * @minlength 24
   * @maxlength 24
   * @example "5e4f1b1b1b1b1b1b1b1b1b1b"
   */
  id: string;
  /**
   * Length of the product.
   * @example 15
   * @default 0
   */
  length: number | null;
  /**
   * Max cost of the product.
   * @example 1.5
   * @default 0
   * @minimum 0
   * @maximum 9999999999999.99
   */
  maxPrice: number;
  /**
   * Quantity of the product.
   * @example 1.5
   * @default 0
   */
  measureQuantity: number;
  /**
   * Height of the product.
   * @example "UN"
   * @default "UN"
   */
  measureUnit: string;
  /**
   * Min cost of the product.
   * @example 1.5
   * @default 0
   * @minimum 0
   * @maximum 9999999999999.99
   */
  minPrice: number;
  /**
   * Name of the product.
   * @minlength 1
   * @maxlength 120
   * @example "Product name"
   */
  name: string;
  /**
   * Fill in with the full NCM Code (position and sub-item) or, if you do not have it,
   * with the NCM code "00" (two zeros). Format: "99999999" or "00"
   * @minlength 2
   * @maxlength 8
   */
  ncm: IProductNcm;
  /**
   * Net weight of the product.
   * @example 1.5
   * @default 0
   * @minimum 0
   * @maximum 9999999999999.999
   * @multipleOf 0.001
   */
  netWeight: number | null;
  /**
   * Price of the product.
   * @example 1.5
   * @default 0
   * @minimum 0
   * @maximum 9999999999999.99
   * @multipleOf 0.01
   */
  price: number;
  /**
   * Tags associated with the product.
   * @example ["tag1", "tag2"]
   * @default []
   * @uniqueItems true
   * @minItems 0
   * @maxItems 50
   * @items
   * @minlength 1
   * @maxlength 60
   */
  tags: string[];
  /**
   * URL of the product image.
   * @minlength 1
   * @maxlength 120
   * @example "https://www.example.com/image.jpg"
   * @default ""
   */
  thumbnail: string | null;
  /**
   * Date when the product was last updated.
   * @format date-time
   * @example "2019-01-01T00:00:00.000Z"
   * @default Date.now()
   */
  updatedAt: Date;
  /**
   * Width of the product.
   * @example 15
   * @default 0
   *
   */
  width: number | null;

  // #endregion Properties (29)
}
