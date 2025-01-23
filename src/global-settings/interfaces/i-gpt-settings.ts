import { EChatGptEndpoints } from "../enums";
import { EGlobalSettingsType } from "../enums/global-settings-type.enum";

export interface IChatGptSettings {
    active: boolean;
    createdAt: Date;
    id: string;
    apiKey: string;
    apiUrl: string;
    type: EGlobalSettingsType;
    endpoints: EChatGptEndpoints[];
    updatedAt: Date;
}