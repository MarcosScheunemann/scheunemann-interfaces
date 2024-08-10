import { INatiV1CartItem } from '../interfaces/i-cart-item';

export class NatiV1CartItemEntity implements INatiV1CartItem {
  // #region Properties (23)

  public addition: number = 0;
  public addsValue: boolean = false;
  public createdAt: Date = new Date();
  public id: number = 0;
  public isAdditionalItem: boolean = false;
  public isDelivery: boolean = false;
  public isNew: boolean = false;
  public linkItemId: number = 0;
  public measure: string = '';
  public observations: string = '';
  public personId: number = 0;
  public picture: string | null | undefined = undefined;
  public productCode: string = '';
  public productId: number = 0;
  public productName: string = '';
  public quantity: number = 0;
  public tabId: number = 0;
  public terminalId: string = '';
  public total: number = 0;
  public unitPrice: number = 0;
  public updatedAt: Date = new Date();
  public userName: string = '';
  public without: boolean = false;

  // #endregion Properties (23)

  // #region Constructors (1)

  constructor(data?: Partial<NatiV1CartItemEntity>) {
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
