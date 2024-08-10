import { EEvolutionEvent } from '../enums';

export interface IEvolutionWebhook {
  enabled: boolean;
  url: string;
  events: EEvolutionEvent[];
  webhookByEvents: boolean;
  webhookBase64: boolean;
}
