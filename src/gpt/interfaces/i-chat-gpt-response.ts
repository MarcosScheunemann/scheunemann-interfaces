import { EChatGptModel } from "../enums/model.enum";
import { IChatGptChoice } from "./i-chat-gpt-choice";
import { IChatGptUsage } from "./i-chat-gpt-usage";

export interface IChatGptResponse {
  id: string;
  object: string;
  created: number;
  model: EChatGptModel;
  choices: IChatGptChoice[];
  usage: IChatGptUsage;
}
