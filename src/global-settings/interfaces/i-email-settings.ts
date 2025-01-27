import { EGlobalSettingsType } from '../enums/global-settings-type.enum';

export interface IEmailSettings {
  active: boolean;
  createdAt: Date;
  email: string;
  id: string;
  masterKey: string;
  pass: string;
  service: string;
  type: EGlobalSettingsType;
  updatedAt: Date;
  host: string;
  port: number;
}
