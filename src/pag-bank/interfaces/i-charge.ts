import { EPagBankStatus } from '../enums/status.enum';
import { IPagBankAmount } from './i-amount';
import { IPagBankLink } from './i-link';
import { IPagBankPaymentMethod } from './i-payment-method';
import { IPagBankResponse } from './i-payment-response';
import { IPagBankQrCode } from './i-qr-code';
import { IPagBankRecurring } from './i-recurring';
import { IPagBankSplit } from './i-split';
import { IPagBankSubMerchant } from './i-sub-merchant';

export interface IPagBankCharge {
  id: string;
  status: EPagBankStatus;
  created_at: Date;
  paid_at: Date;
  reference_id: string;
  description:string
  amount: IPagBankAmount;
  payment_response: IPagBankResponse;
  payment_method: IPagBankPaymentMethod;
  metadata: any; // Map <string, string>
  links: IPagBankLink[];
  splits: IPagBankSplit;
  qr_codes?: IPagBankQrCode[];
  recurring?: IPagBankRecurring;
  sub_merchant?: IPagBankSubMerchant;
  notification_urls?: string[]; //Necessário que seja em ambiente seguro com SSL (HTTPS). Exemplo: https://meusite.com/notificacoes
}
