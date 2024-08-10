import { IOrderResumeSaleChannel } from '../interfaces';

export class OrderResumeSaleChannelEntity implements IOrderResumeSaleChannel {
  // #region Properties (4)

  public amount: number = 0;
  public count: number = 0;
  public imageUrl: string = '';
  public name: string = '';

  // #endregion Properties (4)

  // #region Constructors (1)

  constructor(data?: Partial<OrderResumeSaleChannelEntity>) {
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
