import { IBase } from '../../general';

export interface IGoogleAuthSettings extends IBase {
  authProviderX509CertUrl: string;
  authUri: string;
  googleClientId: string;
  googleSecretKey: string;
  javascriptOrigins: string[];
  redirectUris: string[];
  tokenUri: string;
}
