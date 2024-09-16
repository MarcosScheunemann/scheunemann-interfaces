import { EPagBankPaymentMethod } from '../enums/payment-method-type.enum';
import { IPagBankConfigOption } from './i-config-option';

export interface IPagBankPaymentMethodConfig {
  type: EPagBankPaymentMethod;
  config_options: IPagBankConfigOption[]

}
