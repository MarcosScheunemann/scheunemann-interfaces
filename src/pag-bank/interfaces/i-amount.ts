import { IPagBankSummary } from "./i-sumary";

export interface IPagBankAmount {
  value: number;
  currency?: 'BRL';
  summary ?: IPagBankSummary;

}
