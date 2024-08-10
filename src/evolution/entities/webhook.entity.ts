import { EEvolutionEvent } from '../enums';
import { IEvolutionWebhook } from '../interfaces/i-webhook';

export class EvolutionWebhookEntity implements IEvolutionWebhook {
  // #region Properties (5)

  public enabled: boolean = true;
  public events: EEvolutionEvent[] = [
    EEvolutionEvent.QRCODE_UPDATED,
    EEvolutionEvent.MESSAGES_UPSERT,
    EEvolutionEvent.MESSAGES_UPDATE,
    EEvolutionEvent.MESSAGES_DELETE,
    EEvolutionEvent.SEND_MESSAGE,
    EEvolutionEvent.CONNECTION_UPDATE,
    EEvolutionEvent.CALL,
  ];
  public url: string = '';
  public webhookBase64: boolean = false;
  public webhookByEvents: boolean = false;

  // #endregion Properties (5)

  // #region Constructors (1)

  constructor(data?: Partial<EvolutionWebhookEntity>) {
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
