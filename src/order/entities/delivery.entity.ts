import { AddressEntity } from '../../general';
import { EOrderDeliveryMode } from '../enums/delivery-mode.enum';
import { IOrderDelivery } from '../interfaces';

export class OrderDeliveryEntity implements IOrderDelivery {
  // #region Properties (6)

  public deliveredBy: string = '';
  public deliveryAddress: AddressEntity = new AddressEntity();
  public deliveryDateTime: string = '';
  public minimumCartValue: number = 0;
  public mode: EOrderDeliveryMode = EOrderDeliveryMode.DEFAULT;
  public preferential: boolean = false;

  // #endregion Properties (6)
}
