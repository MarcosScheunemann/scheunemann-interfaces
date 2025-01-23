import { EGlobalSettingsType } from '../enums/global-settings-type.enum';
import { IEmailSettings } from '../interfaces/i-email-settings';

export class EmailSettingsEntity implements IEmailSettings {
    public active: boolean = true;
    public createdAt: Date = new Date();
    public email: string = '';
    public id: string = '';
    public masterKey: string = 'master@ibchain.com';
    public pass: string = '47CaXFNqSkqPZXY';
    public service: string = 'outlook';
    public type: EGlobalSettingsType = EGlobalSettingsType.EMAIL_DEFAULT;
    public updatedAt: Date = new Date();

    constructor(data?: Partial<EmailSettingsEntity>) {
        if (data) {
          for (let key in data) {
            if (data.hasOwnProperty(key) && key in this) {
              (this as any)[key] = (data as any)[key];
            }
          }
        }
      }
} 