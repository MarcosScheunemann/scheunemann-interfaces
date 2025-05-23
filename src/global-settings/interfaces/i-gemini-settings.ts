import { EGlobalSettingsType } from "../enums/global-settings-type.enum";

export interface IChatGeminiSettings {
    active: boolean;
    createdAt: Date;
    id: string;
    apiKey: string;
    apiUrl: string;
    type: EGlobalSettingsType;
    endpoints: [];
    updatedAt: Date;
}