import { EPagBankSplitMethod } from "../enums/method.enum";
import { IPagBankReceiver } from "./i-receiver";

export interface IPagBankSplit {
  method: EPagBankSplitMethod;
  receivers: IPagBankReceiver[]; 
}