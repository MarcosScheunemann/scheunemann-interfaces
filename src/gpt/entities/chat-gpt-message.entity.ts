import { EChatGptRole } from '../enums/role.enum';
import { IChatGptMessage } from '../interfaces';

export class ChatGptMessageEntity implements IChatGptMessage {
  // #region Properties (2)

  public role: EChatGptRole = EChatGptRole.ASSISTANT;
  public content: string = '';

  // #endregion Properties (2)

  // #region Constructors (1)

  constructor(data?: Partial<ChatGptMessageEntity>) {
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