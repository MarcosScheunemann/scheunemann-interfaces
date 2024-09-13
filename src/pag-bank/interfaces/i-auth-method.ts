import { EPagBankAuthMethod } from '../enums/auth-method-type.enum';

export interface IPagBankAuthMethod {
  type: EPagBankAuthMethod;
  cavv: string;
  eci: string;
  xid: string;
  version: string;
  dstrans_id: string;
  status: string;
}
