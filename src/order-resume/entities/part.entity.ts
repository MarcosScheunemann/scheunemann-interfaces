import { IOrderResumePart } from '../interfaces';

export class OrderResumePartEntity implements IOrderResumePart {
  // #region Properties (5)

  public amount: number = 0;
  public count: number = 0;
  public index: number = -1;
  public name: string = '';
  public shortName: string = '';

  // #endregion Properties (5)

  // #region Constructors (1)

  constructor(data?: Partial<OrderResumePartEntity>) {
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
