export interface IIuguChargeCreditCard {
  // #region Properties (13)

  LR: string | '00';
  bin: string;
  brand: string | 'master' | 'visa';
  errors: any;
  identification: string | null;
  invoiceId: string;
  last4: string;
  message: string | 'Autorizado';
  pdf: string;
  reversible: boolean;
  success: boolean;
  token: string;
  url: string;

  // #endregion Properties (13)
}
