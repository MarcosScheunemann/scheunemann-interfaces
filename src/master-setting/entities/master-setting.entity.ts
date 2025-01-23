import { EMasterSettingsType } from '../enums';
import { IMasterSetting } from '../interfaces/i-master-setting';

export class MasterSettingEntity implements IMasterSetting {
  // #region Properties (10)
public createdAt: Date = new Date();
public updatedAt: Date = new Date();
public id: string = '';
public active: boolean = true;
public email: string = '';
public masterKey: string = '';
public service: string = '';
public pass: string = '';
public type: EMasterSettingsType = EMasterSettingsType.EMAIL_DEFAULT;


  // #endregion Properties (10)

  // #region Constructors (1)

  constructor(data?: Partial<MasterSettingEntity>) {
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
