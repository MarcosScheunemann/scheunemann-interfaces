import { EPaymentType } from '../../general';
import { IOrderPaymentCard } from './i-payment-card';
import { IOrderPaymentCash } from './i-payment-cash';
import { IOrderPaymentPix } from './i-payment-pix';
import { IOrderPaymentWallet } from './i-payment-wallet';

export interface IOrderPaymentMethod {
  // #region Properties (11)

  card?: IOrderPaymentCard | null;
  cash?: IOrderPaymentCash | null;
  code: string;
  currency: 'BRL';
  id: string;
  method: EPaymentType;
  pix?: IOrderPaymentPix | null;
  prepaid: boolean;
  type: 'ONLINE' | 'OFFLINE';
  value: number;
  wallet?: IOrderPaymentWallet | null;

  // #endregion Properties (11)
}
