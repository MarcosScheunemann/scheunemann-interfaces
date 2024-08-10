import { EPaymentType } from '../../general';
import { IOrderPaymentMethod } from '../interfaces';
import { OrderPaymentCardEntity } from './payment-card.entity';
import { OrderPaymentCashEntity } from './payment-cash.entity';
import { OrderPaymentPixEntity } from './payment-pix.entity';
import { OrderPaymentWalletEntity } from './payment-wallet.entity';

export class OrderPaymentMethodEntity implements IOrderPaymentMethod {
  // #region Properties (11)

  card?: OrderPaymentCardEntity | null = null;
  cash?: OrderPaymentCashEntity | null = null;
  public code: string = '';
  public currency: 'BRL' = 'BRL';
  public id: string = '';
  public method: EPaymentType = EPaymentType.CASH;
  pix?: OrderPaymentPixEntity | null = null;
  public prepaid: boolean = false;
  public type: 'ONLINE' | 'OFFLINE' = 'OFFLINE';
  public value: number = 0;
  wallet?: OrderPaymentWalletEntity | null = null;

  // #endregion Properties (11)

  // #region Constructors (1)

  constructor(data?: Partial<OrderPaymentMethodEntity>) {
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
