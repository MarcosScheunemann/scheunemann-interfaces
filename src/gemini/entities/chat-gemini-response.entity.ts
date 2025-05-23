import { IChatGeminiResponse } from '../interfaces';
import { IChatGeminiUsage } from '../interfaces/i-chat-gpt-usage';
import { ChatGeminiUsageEntity } from './chat-gemini-usage.entity';

export class ChatGeminiResponseEntity implements IChatGeminiResponse {

  usage: IChatGeminiUsage = new ChatGeminiUsageEntity();
  text: string = '';

  constructor(data?: Partial<ChatGeminiResponseEntity>) {
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