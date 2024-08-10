export interface INatiV1CartItem {
  // #region Properties (23)

  addition: number;
  addsValue: boolean;
  createdAt: Date;
  id: number;
  isAdditionalItem: boolean;
  isDelivery: boolean;
  isNew: boolean;
  linkItemId: number;
  measure: string;
  observations: string;
  personId: number;
  picture: string | null | undefined;
  productCode: string;
  productId: number;
  productName: string;
  quantity: number;
  tabId: number;
  terminalId: string;
  total: number;
  unitPrice: number;
  updatedAt: Date;
  userName: string;
  without: boolean;

  // #endregion Properties (23)
}
