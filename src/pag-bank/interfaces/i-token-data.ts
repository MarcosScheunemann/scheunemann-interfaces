import { EPagBankWallet } from '../enums/wallet.enum';

export interface IPagBankTokenData {
  requestor_id: string;
  wallet: EPagBankWallet;
  cryptogram: string;
  ecommerce_domain: string;
  assurance_level: number;
}
