import { IOrder } from '../../order';

export interface IBillingOrder extends IOrder {
  // #region Properties (42)
  billingPaymentId: string;

  // #endregion Properties (42)
}
