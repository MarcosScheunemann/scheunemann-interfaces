import { IMottuAddress, IMottuOrderDeliverer } from '../interfaces';
import { MottuAddressEntity } from './address.entity';

export class MottuOrderDelivererEntity implements IMottuOrderDeliverer {
  // #region Properties (14)

  public address: IMottuAddress = new MottuAddressEntity();
  public code: string | null = null;
  public deliveryCode: number | null = null;
  public distance: number | null = null;
  public dropoffCode: number | null = null;
  public fullCode: string | null = null;
  public id: number | null = null;
  public name: string | null = null;
  public observation: string | null = null;
  public onlinePayment: boolean = false;
  public orderRoute: number = 0;
  public phone: string | null = null;
  public productValue: number | null = null;
  public situation: number | null = null;

  // #endregion Properties (14)

  // #region Constructors (1)

  constructor(data?: Partial<MottuOrderDelivererEntity>) {
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
