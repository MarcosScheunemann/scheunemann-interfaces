export interface IGlobalSettingIugu {
  // #region Properties (9)

  bankSlipExtraDue: number;
  ensureWorkdayDueDate: boolean;
  expiresIn: number;
  fines: boolean;
  latePaymentFine: number;
  latePaymentFineCents: number;
  liveApiToken: string;
  testApiToken: string;
  userApiToken: string;
  perDayInterest: boolean;
  perDayInterestCents: number;
  perDayInterestValue: number;
  billingDays: number;

  // #endregion Properties (9)
}
