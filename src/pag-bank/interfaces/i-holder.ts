import { IPagBankAddress } from './i-address';
export interface IPagBankHolder {
  name: string;
  tax_id: string;
  email?: string;
  address?: IPagBankAddress
}
