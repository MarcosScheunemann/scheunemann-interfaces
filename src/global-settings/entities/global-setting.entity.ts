import { IGlobalSetting } from '../interfaces';
import { GlobalSettingIuguEntity } from './global-setting-iugu.entity';

export class GlobalSettingEntity implements IGlobalSetting {
  // #region Properties (1)

  public iugu: GlobalSettingIuguEntity = new GlobalSettingIuguEntity();
  public billingDays = 3;

  // #endregion Properties (1)

  // #region Constructors (1)

  constructor(data?: Partial<GlobalSettingEntity>) {
    if (data) {
      for (let key in data) {
        if (data.hasOwnProperty(key) && key in this) {
          (this as any)[key] = (data as any)[key];
        }
      }
    }
  }

  // #endregion Constructors (1)
}
