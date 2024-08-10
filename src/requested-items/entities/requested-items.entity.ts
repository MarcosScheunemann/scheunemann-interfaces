import { IRequestedItems } from '../interfaces/i-requested-items';
import { IRequestedItemData } from '../interfaces/i-requested-items-data';

export class RequestedItemsEntity implements IRequestedItems {
  // #region Properties (9)

  public companyId: string | null = null;
  public containerId: string | null = null;
  public createdAt: Date = new Date();
  public data: IRequestedItemData[] = [];
  public id: string = '';
  public pos: string | null = null;
  public preview: boolean = false;
  public token: string = '';
  public updatedAt: Date = new Date();
  public isPaid: boolean = false;

  // #endregion Properties (9)

  // #region Constructors (1)

  constructor(data?: Partial<RequestedItemsEntity>) {
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
