import { BaseEntity } from '../../general';
import { IGoogleAuthSettings } from '../interfaces';

export class GoogleAuthSettingsEntity extends BaseEntity implements IGoogleAuthSettings {
  authProviderX509CertUrl: string = '';
  authUri: string = '';
  googleClientId: string = '';
  googleSecretKey: string = '';
  javascriptOrigins: string[] = [];
  redirectUris: string[] = [];
  tokenUri: string = '';

  constructor(data?: Partial<GoogleAuthSettingsEntity>) {
    super(data);
    if (data) {
      for (let key in data) {
        if (data.hasOwnProperty(key) && key in this) {
          (this as any)[key] = (data as any)[key];
        }
      }
    }
  }
}
