import { IChatGptMessage } from "./i-chat-gpt-message";

export interface IChatGptChoice {
  index: number;
  message: IChatGptMessage;
  finish_reason: string;
} 