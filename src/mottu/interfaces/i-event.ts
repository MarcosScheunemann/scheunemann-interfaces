import { IMottuEventDeliveryMan } from './i-event-delivery-man';
import { IMottuEventRequestedBy } from './i-event-requested-by';

export interface IMottuEvent {
  // #region Properties (7)

  createdAt: Date;
  deliveryMan: IMottuEventDeliveryMan;
  description: string;
  id: number;
  latitude: number;
  longitude: number;
  requestedBy: IMottuEventRequestedBy;

  // #endregion Properties (7)
}
