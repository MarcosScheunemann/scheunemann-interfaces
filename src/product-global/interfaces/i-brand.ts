export interface IProductBrand {
  // #region Properties (15)
  /**
   * @minlength 1
   * @maxlength 120
   * @example "Brand name"
   */
  name: string;
  /**
   * * URL to an image representing the product brand.
   * It should be a valid URL.
   * @example "http://www.example.com"
   */
  picture: string;
}
