import { EGlobalSettingsType } from '../enums/global-settings-type.enum';
import { EChatGptEndpoints } from '../enums/chat-gpt-endpoints.enum';
import { IChatGptSettings } from '../interfaces/i-gpt-settings';

export class GptSettingsEntity implements IChatGptSettings {
    public active: boolean = true;
    public createdAt: Date = new Date();
    public id: string = '';
    public apiKey: string = '';
    public apiUrl: string = 'https://api.openai.com/v1';
    public type: EGlobalSettingsType = EGlobalSettingsType.CHATGPT_CONFIG;
    public updatedAt: Date = new Date();
    public endpoints: EChatGptEndpoints[] = []

    constructor(data?: Partial<GptSettingsEntity>) {
        if (data) {
            for (let key in data) {
                if (data.hasOwnProperty(key) && key in this) {
                    (this as any)[key] = (data as any)[key];
                }
            }
        }
    }
} 