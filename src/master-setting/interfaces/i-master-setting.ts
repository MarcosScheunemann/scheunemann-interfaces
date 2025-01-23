import { EMasterSettingsType } from "../enums";
export interface IMasterSetting {

  createdAt: Date;
  updatedAt: Date;
  id: string;
  active: boolean;
  email: string;
  masterKey: string;
  service: string;
  pass: string;
  type: EMasterSettingsType;
  
}
