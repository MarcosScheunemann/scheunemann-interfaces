import { EPagBankBrand } from '../enums/brand.enum';
import { EPagBankPaymentMethod } from '../enums/payment-method-type.enum';
import { IPagBankAuthMethod } from './i-auth-method';
import { IPagBankBoleto } from './i-boleto';
import { IPagBankCard } from './i-card';
import { IPagBankPix } from './i-pix';
import { IPagBankTokenData } from './i-token-data';

export interface IPagBankPaymentMethod {
  type: EPagBankPaymentMethod;
  installments?: number;
  capture?: boolean;
  capture_before?: Date;
  soft_descriptor?: string;
  card?: IPagBankCard;
  token_data?: IPagBankTokenData; // Deve ser enviado quando um Cartão de Crédito ou Débito tokenizado pelas bandeiras Visa ou Mastercard é utilizado.
  authentication_method?: IPagBankAuthMethod; // Obrigatório quando payment_method.type = DEBIT_CARD
  boleto?: IPagBankBoleto;
  pix?: IPagBankPix;
  brands?:EPagBankBrand[] ;
}
