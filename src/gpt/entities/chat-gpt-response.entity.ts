import { EChatGptModel } from '../enums/model.enum';
import { IChatGptResponse } from '../interfaces';
import { ChatGptChoiceEntity } from './chat-gpt-choice.entity';
import { ChatGptUsageEntity } from './chat-gpt-usage.entity';

export class ChatGptResponseEntity implements IChatGptResponse {
  // #region Properties (6)

  public id: string = '';
  public object: string = '';
  public created: number = 0;
  public model: EChatGptModel = EChatGptModel.GPT_4;
  public choices: ChatGptChoiceEntity[] = [];
  public usage: ChatGptUsageEntity = new ChatGptUsageEntity();

  // #endregion Properties (6)

  // #region Constructors (1)

  constructor(data?: Partial<ChatGptResponseEntity>) {
    if (data) {
      for (let key in data) {
        if (data.hasOwnProperty(key) && key in this) {
          if (key === 'choices') {
            this.choices = data.choices?.map(choice => new ChatGptChoiceEntity(choice)) || [];
          } else if (key === 'usage') {
            this.usage = new ChatGptUsageEntity(data.usage);
          } else {
            (this as any)[key] = (data as any)[key];
          }
        }
      }
    }
  }

  // #endregion Constructors (1)
} 