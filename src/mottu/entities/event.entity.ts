import { IMottuEvent, IMottuEventDeliveryMan, IMottuEventRequestedBy } from '../interfaces';
import { MottuEventDeliveryManEntity } from './event-delivery-man.entity';
import { MottuEventRequestedByEntity } from './event-requested-by.entity';

export class MottuEventEntity implements IMottuEvent {
  // #region Properties (7)

  public createdAt: Date = new Date();
  public deliveryMan: IMottuEventDeliveryMan = new MottuEventDeliveryManEntity();
  public description: string = '';
  public id: number = 0;
  public latitude: number = 0;
  public longitude: number = 0;
  public requestedBy: IMottuEventRequestedBy = new MottuEventRequestedByEntity();

  // #endregion Properties (7)

  // #region Constructors (1)

  constructor(data?: Partial<MottuEventEntity>) {
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
