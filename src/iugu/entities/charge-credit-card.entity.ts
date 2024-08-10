export class IuguChargeCreditCardEntity {
  // #region Properties (13)

  public LR: string | '00' = '00';
  public bin: string = '';
  public brand: string | 'master' | 'visa' = '';
  public errors: any = {};
  public identification: string | null = null;
  public invoiceId: string = '';
  public last4: string = '';
  public message: string | 'Autorizado' = '';
  public pdf: string = '';
  public reversible: boolean = false;
  public success: boolean = false;
  public token: string = '';
  public url: string = '';
  constructor(data?: Partial<IuguChargeCreditCardEntity>) {
    if (data) {
      for (let key in data) {
        if (data.hasOwnProperty(key) && key in this) {
          (this as any)[key] = (data as any)[key];
        }
      }
    }
  }

  // #endregion Properties (13)
}
