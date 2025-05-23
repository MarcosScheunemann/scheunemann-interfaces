import { EGlobalSettingsType } from '../enums/global-settings-type.enum';
import { IChatGeminiSettings } from '../interfaces';

export class GeminiSettingsEntity implements IChatGeminiSettings {
    public active: boolean = true;
    public createdAt: Date = new Date();
    public id: string = '';
    public apiKey: string = '';
    public apiUrl: string = 'https://generativelanguage.googleapis.com/v1beta';
    public type: EGlobalSettingsType = EGlobalSettingsType.CHATGEMINI_CONFIG;
    public updatedAt: Date = new Date();
    public endpoints: [] = []

    constructor(data?: Partial<GeminiSettingsEntity>) {
        if (data) {
            for (let key in data) {
                if (data.hasOwnProperty(key) && key in this) {
                    (this as any)[key] = (data as any)[key];
                }
            }
        }
    }
} 