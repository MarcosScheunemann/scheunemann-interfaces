import { EDesenfilaFrom, EDocType } from '../../general';
import { ISponsor } from '../interfaces/i-sponsor';
import { ISponsorFee } from '../interfaces/i-sponsor-fee';

export class SponsorEntity implements ISponsor {
  id: string = '';
  name: string = '';
  doc: string = '';
  createdAt: Date = new Date();
  fees: ISponsorFee[] = [];
  docType: EDocType = EDocType.CNPJ;
  desenfilaMerchantId: string | null = null;
  desenfilaContainerId: string | null = null;
  natiRefId: string | null = null;
  mobyoRefId: string | null = null;
  from: EDesenfilaFrom = EDesenfilaFrom.DEFAULT;
  internationalCode: string = '';
  phoneNumer: string = '';
  email: string = '';

  constructor(data?: Partial<SponsorEntity>) {
    if (data) {
      for (let key in data) {
        if (data.hasOwnProperty(key) && key in this) {
          (this as any)[key] = (data as any)[key];
        }
      }
    }
  }
}
