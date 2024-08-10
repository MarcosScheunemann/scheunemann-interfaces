import { EEventMessage } from '../enums';
import { IEventMessage } from '../interfaces/i-event-message';

export class EventMessageEntity implements IEventMessage {
  // #region Properties (10)

  public companyId: string | null = null;
  public containerId: string | null = null;
  public createdAt: Date = new Date();
  public customerId: string | null = null;
  public description: string | null = null;
  public event: EEventMessage = EEventMessage.LAST_DAY_SALES;
  public id: string = '';
  public partnerId: string | null = null;
  public recipients: string[] = [];
  public updatedAt: Date = new Date();

  // #endregion Properties (10)

  // #region Constructors (1)

  constructor(data?: Partial<EventMessageEntity>) {
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
