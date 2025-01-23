import { EGlobalSettingsType } from '../enums/global-settings-type.enum';
import { IChatClaudeSettings } from '../interfaces/i-claude-settings';

export class ClaudeSettingsEntity implements IChatClaudeSettings {
    public active: boolean = true;
    public createdAt: Date = new Date();
    public id: string = '';
    public anthropicVersion: string = '2023-06-01';
    public apiKey: string = '';
    public apiUrl: string = 'https://api.anthropic.com/v1';
    public type: EGlobalSettingsType = EGlobalSettingsType.CHATCLAUDE_CONFIG;
    public updatedAt: Date = new Date();

    constructor(data?: Partial<ClaudeSettingsEntity>) {
        if (data) {
          for (let key in data) {
            if (data.hasOwnProperty(key) && key in this) {
              (this as any)[key] = (data as any)[key];
            }
          }
        }
      }
} 