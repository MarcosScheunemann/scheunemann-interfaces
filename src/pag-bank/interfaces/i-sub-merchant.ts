import { EPagBankStatus } from '../enums/status.enum';
import { IPagBankAddress } from './i-address';
import { IPagBankAmount } from './i-amount';
import { IPagBankLink } from './i-link';
import { IPagBankPaymentMethod } from './i-payment-method';
import { IPagBankResponse } from './i-payment-response';
import { IPagBankPhone } from './i-phone';
import { IPagBankRecurring } from './i-recurring';
import { IPagBankSplit } from './i-split';

export interface IPagBankSubMerchant {
  reference_id: string;
  name: string;
  tax_id: string;
  mcc: string;
  address: IPagBankAddress;
  phone: IPagBankPhone;
}
