import { IPagBankHolder } from './i-holder';

export interface IPagBankCard {
  id: string;
  number: string;
  network_token: string;
  exp_month: number;
  exp_year: number;
  security_code: string;
  store: boolean;
  brand: string;
  product: string;
  first_digits: number;
  last_digits?: number;
  holder?: IPagBankHolder;
}
