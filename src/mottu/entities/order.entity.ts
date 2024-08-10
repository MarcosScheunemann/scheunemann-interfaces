import { IMottuEvent, IMottuOrder, IMottuOrderDeliveryMan } from '../interfaces';
import { MottuOrderDeliveryManEntity } from './order-deliverery-man.entity';

export class MottuOrderEntity implements IMottuOrder {
  // #region Properties (18)

  public code: string = '';
  public createdAt: Date = new Date();
  public deliveryFee: number = 0;
  public deliveryMan: IMottuOrderDeliveryMan = new MottuOrderDeliveryManEntity();
  public events: IMottuEvent[] = [];
  public expectedDelivery: Date = new Date();
  public expectedPickup: Date = new Date();
  public fullCode: string = '';
  public id: any = 0;
  public origin: string = '';
  public pickupCode: string = '';
  public preparationTime: number = 0;
  public returnCode: string = '';
  public situation: number = 0;
  public storeId: number = 0;
  public totalDistance: number = 0;
  public trackingUrl: string = '';
  public updatedAt: Date = new Date();

  // #endregion Properties (18)

  // #region Constructors (1)

  constructor(data?: Partial<MottuOrderEntity>) {
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
