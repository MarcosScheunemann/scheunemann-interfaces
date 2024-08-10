import { EDesenfilaFrom, EDocType } from '../../general';
import { ISponsorFee } from './i-sponsor-fee';
export interface ISponsor {
  id: string;
  fees: ISponsorFee[];
  createdAt: Date;
  name: string;
  doc: string;
  docType: EDocType;
  from: EDesenfilaFrom;
  desenfilaContainerId: string | null;
  desenfilaMerchantId: string | null;
  internationalCode: string;
  phoneNumer: string;
  email: string;
  natiRefId: string | null;
  mobyoRefId: string | null;
}
