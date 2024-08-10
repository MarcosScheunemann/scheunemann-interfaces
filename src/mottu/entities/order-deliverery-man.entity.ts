import { IMottuOrderDeliveryMan } from '../interfaces';

export class MottuOrderDeliveryManEntity implements IMottuOrderDeliveryMan {
  // #region Properties (9)

  public ddd: string = '';
  public document: string = '';
  public email: string = '';
  public id: number = 0;
  public latitude: number = 0;
  public longitude: number = 0;
  public name: string = '';
  public phone: string = '';
  public profileId: number = 0;

  // #endregion Properties (9)

  // #region Constructors (1)

  constructor(data?: Partial<MottuOrderDeliveryManEntity>) {
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
