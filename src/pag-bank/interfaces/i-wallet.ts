import { EPagBankWallet } from '../enums/wallet.enum';
import { IPagBankPaymentMethod } from './i-payment-method';

export interface IPagBankWallet {
  type: EPagBankWallet;
  key: string;
  payment_method : IPagBankPaymentMethod
}
