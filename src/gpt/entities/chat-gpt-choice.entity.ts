import { IChatGptChoice } from '../interfaces';
import { ChatGptMessageEntity } from './chat-gpt-message.entity';

export class ChatGptChoiceEntity implements IChatGptChoice {
  // #region Properties (3)

  public index: number = 0;
  public message: ChatGptMessageEntity = new ChatGptMessageEntity();
  public finish_reason: string = '';

  // #endregion Properties (3)

  // #region Constructors (1)

  constructor(data?: Partial<ChatGptChoiceEntity>) {
    if (data) {
      for (let key in data) {
        if (data.hasOwnProperty(key) && key in this) {
          if (key === 'message') {
            this.message = new ChatGptMessageEntity(data.message);
          } else {
            (this as any)[key] = (data as any)[key];
          }
        }
      }
    }
  }

  // #endregion Constructors (1)
} 