import { IChatGeminiUsage } from '../interfaces/i-chat-gpt-usage';

export class ChatGeminiUsageEntity implements IChatGeminiUsage {
  public prompt_tokens: number = 0;
  public completion_tokens: number = 0;
  public total_tokens: number = 0;

  constructor(data?: Partial<ChatGeminiUsageEntity>) {
    if (data) {
      for (let key in data) {
        if (data.hasOwnProperty(key) && key in this) {
          (this as any)[key] = (data as any)[key];
        }
      }
    }
  }

  // #endregion Constructors (1)
} 