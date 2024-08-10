export interface IFeeDetail {
  amount: number;
  feePayer: 'collector' | string;
  type: 'mercadopago_fee' | 'application_fee' | string;
}
