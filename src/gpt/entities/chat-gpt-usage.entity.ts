import { IChatGptUsage } from '../interfaces';

export class ChatGptUsageEntity implements IChatGptUsage {
  // #region Properties (3)

  public prompt_tokens: number = 0;
  public completion_tokens: number = 0;
  public total_tokens: number = 0;

  // #endregion Properties (3)

  // #region Constructors (1)

  constructor(data?: Partial<ChatGptUsageEntity>) {
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