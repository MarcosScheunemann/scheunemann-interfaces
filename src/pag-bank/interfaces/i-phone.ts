import { EPagBankPhoneType } from "../enums/phone-type.enum";

export interface IPagBankPhone {
  country: number; // Código de operadora do País (DDI), Ex: 55
  area: number;    // Código de operadora local (DDD), Ex: 21
  number: number;  // Número do telefone, Ex: 123456789
  type: EPagBankPhoneType;  // Tipo de telefone
}