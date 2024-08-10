import { IMottuEvent } from './i-event';
import { IMottuOrderDeliveryMan } from './i-order-delivery-man';

export interface IMottuOrder {
  // #region Properties (16)

  code: string;
  createdAt: Date;
  deliveryFee: number;
  deliveryMan: IMottuOrderDeliveryMan;
  events: IMottuEvent[];
  expectedDelivery: Date;
  expectedPickup: Date;
  fullCode: string;
  id: any;
  origin: string;
  pickupCode: string;
  preparationTime: number;
  returnCode: string;
  situation: number;
  storeId: number;
  totalDistance: number;
  trackingUrl: string;
  updatedAt: Date;

  // #endregion Properties (16)
}
