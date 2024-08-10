import { IMottuAddress, IMottuOrderPreview, IMottuOrderStore } from '../interfaces';
import { MottuAddressEntity } from './address.entity';
import { MottuOrderStoreEntity } from './order-store.entity';

export class MottuOrderPreviewEntity implements IMottuOrderPreview {
  // #region Properties (10)

  public deliveries: IMottuAddress[] = [];
  public deliveryFee: number = 0;
  public expectedDelivery: Date = new Date();
  public expectedPickup: Date = new Date();
  public onlinePayment: boolean = false;
  public pickupAddress: IMottuAddress = new MottuAddressEntity();
  public previewDeliveryTime: boolean = false;
  public sortByBestRoute: boolean = false;
  public store: IMottuOrderStore = new MottuOrderStoreEntity();
  public totalDistance: number = 0;

  // #endregion Properties (10)

  // #region Constructors (1)

  constructor(data?: Partial<MottuOrderPreviewEntity>) {
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
