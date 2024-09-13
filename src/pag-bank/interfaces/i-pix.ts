import { EPagBankPaymentMethod } from '../enums/payment-method-type.enum';
import { IPagBankAuthMethod } from './i-auth-method';
import { IPagBankBoleto } from './i-boleto';
import { IPagBankCard } from './i-card';
import { IPagBankHolder } from './i-holder';
import { IPagBankTokenData } from './i-token-data';

export interface IPagBankPix {
  end_to_end_id : string;

holder :IPagBankHolder
}
