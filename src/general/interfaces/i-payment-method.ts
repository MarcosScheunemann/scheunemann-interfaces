import { EPaymentType } from '..';
import { IPaymentCard } from './i-payment-card';
import { IPaymentCash } from './i-payment-cash';
import { IPaymentPix } from './i-payment-pix';
import { IPaymentWallet } from './i-payment-wallet';

export interface IPaymentMethod {
  // #region Properties (11)

  card?: IPaymentCard | null;
  cash?: IPaymentCash | null;
  code: string;
  currency: 'BRL';
  id: string;
  method: EPaymentType;
  pix?: IPaymentPix | null;
  prepaid: boolean;
  type: 'ONLINE' | 'OFFLINE';
  value: number;
  wallet?: IPaymentWallet | null;

  // #endregion Properties (11)
}
