import { EGlobalSettingsType } from "../enums/global-settings-type.enum";

export interface IChatClaudeSettings {
    active: boolean;
    createdAt: Date;
    id: string;
    anthropicVersion: string;
    apiKey: string;
    apiUrl: string;
    type: EGlobalSettingsType;
    updatedAt: Date;
}