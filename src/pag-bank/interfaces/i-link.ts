import { EPagBankLinkType } from '../enums/link-type.enum';
import { EPagBankRelLink } from '../enums/rel-link.enum';
import { IPagBankWallet } from './i-wallet';

export interface IPagBankLink {
  rel: EPagBankRelLink;
  href: string;
  media: string;
  type: EPagBankLinkType;
  wallet?: IPagBankWallet;
}
