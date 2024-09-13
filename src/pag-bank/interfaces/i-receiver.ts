import { IPagBankAccount } from "./i-account";
import { IPagBankAmount } from "./i-amount";
import { IPagBankSplitConfiguration } from "./i-configuration";

export interface IPagBankReceiver {
  amount : IPagBankAmount;
  account: IPagBankAccount; 
  configurations: IPagBankSplitConfiguration; // Configurações dos recebedores
  reason?: string;
}