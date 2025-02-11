import { EGlobalSettingsType } from '../enums/global-settings-type.enum';
import { IMeliSettings } from '../interfaces/i-meli-settings';

export class MeliSettingsEntity implements IMeliSettings {
    public active: boolean = true;
    public updatedAt: Date = new Date();
    public id: string = '';
    public createdAt: Date = new Date();
    public type: EGlobalSettingsType = EGlobalSettingsType.MELI_CONFIG;
    public accessToken: string = '';
    public acessToken_test: string = '';
    public public_key: string = '';
    public public_key_test: string = '';
    public client_secret: string = '';

    constructor(data?: Partial<MeliSettingsEntity>) {
        if (data) {
          for (let key in data) {
            if (data.hasOwnProperty(key) && key in this) {
              (this as any)[key] = (data as any)[key];
            }
          }
        }
      }
} 