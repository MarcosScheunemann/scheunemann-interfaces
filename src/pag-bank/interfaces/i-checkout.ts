import { IPagBankCustomer } from './i-customer';
import { IPagBankItem } from './i-item';
import { IPagBankLink } from './i-link';
import { IPagBankPaymentMethod } from './i-payment-method';
import { IPagBankPaymentMethodConfig } from './i-payment-method-config';
import { IPagBankShipping } from './i-shipping';

export interface IPagBankCheckout {
  id: string;
  reference_id: string;
  expiration_date: Date;
  customer: IPagBankCustomer;
  customer_modifiable: boolean;
  items: IPagBankItem[];
  additional_amount: string;
  discount_amount: string;
  shipping: IPagBankShipping;
  payment_methods: IPagBankPaymentMethod;
  payment_methods_configs: IPagBankPaymentMethodConfig[] ;
  redirect_url: string;
  soft_descriptor: string;
  return_url: string; // é o retorno a página da ibchain
  notification_urls: string[];
  created_at: Date;
  status: string; // enum
  links: IPagBankLink[];
}
