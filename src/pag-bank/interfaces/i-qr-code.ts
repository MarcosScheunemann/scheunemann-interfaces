import { IPagBankAmount } from "./i-amount";
import { IPagBankSplit } from "./i-split";

export interface IPagBankQrCode {
  expiration_date: Date;        // Data de expiração do QR Code, Ex: "2021-08-29T20:15:59-03:00" (opcional)
  amount: IPagBankAmount;    // Informações do valor do QR Code
  splits?: IPagBankSplit;          // Informações da divisão de pagamento (opcional)
}