import { IOrder } from '../../order/interfaces';
import { IOrderResumePart } from './i-part';
import { IOrderResumeSaleChannel } from './i-sale-channel';

export interface IOrderResumeGeneralInfo {
  // #region Properties (7)

  amount: number;
  count: number;
  higherSale: IOrder | null;
  days: IOrderResumePart[];
  hours: IOrderResumePart[];
  months: IOrderResumePart[];
  lastTenOrders: IOrder[];
  salesChannels: IOrderResumeSaleChannel[];

  // #endregion Properties (7)
}
