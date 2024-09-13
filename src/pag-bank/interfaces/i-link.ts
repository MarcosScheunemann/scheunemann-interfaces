import { EPagBankLinkType } from '../enums/link-type.enum';
import { IPagBankWallet } from './i-wallet';

export interface IPagBankLink {
  rel: string | 'SELF';
  href: string;
  media: string;
  type: EPagBankLinkType;
  wallet?: IPagBankWallet;
}
