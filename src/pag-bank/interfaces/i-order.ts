import { IPagBankCharge } from "./i-charge";
import { IPagBankCustomer } from "./i-customer";
import { IPagBankItem } from "./i-item";
import { IPagBankLink } from "./i-link";
import { IPagBankQrCode } from "./i-qr-code";
import { IPagBankShipping } from "./i-shipping";

export interface IPagBankOrder {
  id: string;
  reference_id: string;
  customer: IPagBankCustomer;
  items: IPagBankItem[];
  shipping: IPagBankShipping[];
  qr_codes: IPagBankQrCode[];
  notification_urls: string[];
  charges: IPagBankCharge[];
  links: IPagBankLink[];
}
