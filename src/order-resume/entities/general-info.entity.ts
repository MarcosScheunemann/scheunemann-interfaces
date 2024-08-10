import { OrderEntity } from '../../order/entities';
import { IOrderResumeGeneralInfo } from '../interfaces';
import { OrderResumePartEntity } from './part.entity';
import { OrderResumeSaleChannelEntity } from './sales-channel.entity';

export class OrderResumeGeneralInfoEntity implements IOrderResumeGeneralInfo {
  // #region Properties (8)

  public amount: number = 0;
  public count: number = 0;
  public days: OrderResumePartEntity[] = [];
  public higherSale: OrderEntity | null = null;
  public hours: OrderResumePartEntity[] = [];
  public lastTenOrders: OrderEntity[] = [];
  public months: OrderResumePartEntity[] = [];
  public salesChannels: OrderResumeSaleChannelEntity[] = [];

  // #endregion Properties (8)

  // #region Constructors (1)

  constructor(data?: Partial<OrderResumeGeneralInfoEntity>) {
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
