import { IAddress } from '../../general';
import { EOrderDeliveryMode } from '../enums/delivery-mode.enum';

export interface IOrderDelivery {
  // #region Properties (6)

  deliveredBy: string;
  deliveryAddress: IAddress;
  deliveryDateTime: string;
  minimumCartValue: number;
  mode: EOrderDeliveryMode | null;
  preferential: boolean;

  // #endregion Properties (6)
}
