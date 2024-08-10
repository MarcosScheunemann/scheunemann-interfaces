import { IProductGlobal } from '../../product-global';

export interface IProductContainer extends IProductGlobal {
  // #region Properties (8)
  /**
   * Container CEST. Optional if the product is from root.
   * @minlength 7
   * @maxlength 7
   */
  cest: string | null;
  /**
   * Container ID. Optional if the product is from root.
   * @minlength 24
   * @maxlength 24
   * @example "63A3094D46B94B618CDEF2236640E3B3"
   * @default ""
   */
  containerId: string;
  /**
   * To be filled with the Bar Code itself or third parties that is different
   * from the GTIN standard.
   * @minlength 3
   * @maxlength 30
   * @example "123456789"
   */
  customEAN: string;
  /**
   * @minlength 2
   * @maxlength 3
   * @example "01"
   */
  exTipi: string;

  // #endregion Properties (8)
}
