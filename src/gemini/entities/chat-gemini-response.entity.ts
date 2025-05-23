import { EChatGeminiModel } from '../enums/model.enum';
import { IChatGeminiResponse } from '../interfaces';

export class ChatGeminiResponseEntity implements IChatGeminiResponse {



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