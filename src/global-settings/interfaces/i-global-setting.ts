import { IGlobalSettingIugu } from './i-global-setting-iugu';

export interface IGlobalSetting {
  // #region Properties (1)
  billingDays: number;
  iugu: IGlobalSettingIugu;

  // #endregion Properties (1)
}
