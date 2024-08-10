import { IMottuAddress } from './i-address';
import { IMottuOrderStore } from './i-order-store';

export interface IMottuOrderPreview {
  // #region Properties (10)

  deliveries: IMottuAddress[];
  deliveryFee: number;
  expectedDelivery: Date;
  expectedPickup: Date;
  onlinePayment: boolean;
  pickupAddress: IMottuAddress;
  previewDeliveryTime: boolean;
  sortByBestRoute: boolean;
  store: IMottuOrderStore;
  totalDistance: number;

  // #endregion Properties (10)
}
