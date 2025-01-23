import { IPagBankRawData } from './i-raw-data';

export interface IPagBankResponse {
  code: number;
  message: string;
  reference: string;
  raw_data?: IPagBankRawData;
}
