import { EDesenfilaFrom } from '../../general';
import { EOrderTiming, OrderStatusEnum } from '../enums';
import { EOrderType } from '../enums/order-type.enum';
import { IOrder } from '../interfaces';
import { OrderAdditionalFeeEntity } from './additional-fees.entity';
import { OrderBenefitsEntity } from './benefits.entity';
import { OrderCancellationEntity } from './cancellation.entity';
import { OrderCustomerEntity } from './customer.entity';
import { OrderDeliveryEntity } from './delivery.entity';
import { OrderItemEntity } from './item.entity';
import { OrderPaymentEntity } from './payment.entity';
import { OrderTotalEntity } from './total.entity';

export class OrderEntity implements IOrder {
  // #region Properties (22)

  public additionalFees: OrderAdditionalFeeEntity[] = [];
  public benefits: OrderBenefitsEntity[] = [];
  public cancellation: OrderCancellationEntity | null = new OrderCancellationEntity();
  public companyId: string = '';
  public containerId: string = '';
  public createdAt: Date = new Date();
  public customer: OrderCustomerEntity | null = new OrderCustomerEntity();
  public delivery: OrderDeliveryEntity | null = null;
  public displayId: string = Math.round(Math.random() * 100000).toString();
  public id: string = '';
  public invoiceId: string | null = null;
  public items: OrderItemEntity[] = [];
  public orderTiming: EOrderTiming = EOrderTiming.IMMEDIATE;
  public orderType: EOrderType | null = null;
  public payments: OrderPaymentEntity = new OrderPaymentEntity();
  public reference: string | null = null;
  public salesChannel: string = '';
  public sandbox: boolean = false;
  public status: OrderStatusEnum = OrderStatusEnum.PENDING;
  public total: OrderTotalEntity = new OrderTotalEntity();
  public updatedAt: Date = new Date();
  public version: string = '';
  public from: EDesenfilaFrom = EDesenfilaFrom.DEFAULT;

  constructor(data?: Partial<OrderEntity>) {
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
