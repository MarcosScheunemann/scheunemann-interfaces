import { IRequestedItemData } from '../interfaces/i-requested-items-data';

export class RequestedItemDataEntity implements IRequestedItemData {
  // #region Properties (5)

  public description: string = '';
  public quantity: number = 1;
  public totalPrice: number = 0;
  public unit: string | null = 'UN';
  public unitPrice: number = 0;

  // #endregion Properties (5)

  // #region Constructors (1)

  constructor(data?: Partial<RequestedItemDataEntity>) {
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
