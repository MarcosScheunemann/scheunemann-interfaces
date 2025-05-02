import { IBase } from '../../general';
import { EGlobalSettingsType } from '../enums';

export interface IGoogleAuthSettings extends IBase {
  authProviderX509CertUrl: string;
  authUri: string;
  googleClientId: string;
  googleSecretKey: string;
  javascriptOrigins: string[];
  redirectUris: string[];
  tokenUri: string;
  type: EGlobalSettingsType
}
