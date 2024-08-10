import { EDesenfilaFrom } from '../../general';
import { EOrderTiming, OrderStatusEnum } from '../enums';
import { EOrderType } from '../enums/order-type.enum';
import { IOrderAdditionalFee } from './i-additional-fee';
import { IOrderBenefits } from './i-benefits';
import { IOrderCancellation } from './i-cancellation';
import { IOrderCustomer } from './i-customer';
import { IOrderDelivery } from './i-delivery';
import { IOrderItem } from './i-item';
import { IOrderPayment } from './i-payment';
import { IOrderTotal } from './i-total';

export interface IOrder {
  // #region Properties (20)

  additionalFees: IOrderAdditionalFee[];
  benefits: IOrderBenefits[];
  cancellation: IOrderCancellation | null;
  companyId: string;
  containerId: string;
  createdAt: Date;
  customer: IOrderCustomer | null;
  displayId: string;
  invoiceId: string | null;
  delivery: IOrderDelivery | null;
  id: string;
  items: IOrderItem[];
  orderTiming: EOrderTiming;
  orderType: EOrderType | null;
  payments: IOrderPayment | null;
  reference: string | null;
  salesChannel: string;
  sandbox: boolean;
  status: OrderStatusEnum;
  total: IOrderTotal;
  updatedAt: Date;
  version: string;
  from: EDesenfilaFrom;
  // #endregion Properties (20)
}
