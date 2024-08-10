import { IProductContainer } from '../../product-container/interfaces';

export interface IProductCompany extends IProductContainer {
  // #region Properties (8)
  /**
   * Company ID. Optional if the product is from root.
   * @minlength 24
   * @maxlength 24
   * @example "63A3094D46B94B618CDEF2236640E3B3"
   * @default ""
   */
  companyId: string;

  // #endregion Properties (8)
}
