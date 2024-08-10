import { IEvolutionChatWoot } from '../interfaces';

export class EvolutionChatWootEntity implements IEvolutionChatWoot {
  // #region Properties (7)

  public accountId: string = '';
  public enabled: boolean = false;
  public nameInbox: string = '';
  public signMsg: boolean = false;
  public token: string = '';
  public url: string = '';
  public webhookUrl: string = '';

  constructor(data?: Partial<EvolutionChatWootEntity>) {
    if (data) {
      for (let key in data) {
        if (data.hasOwnProperty(key) && key in this) {
          (this as any)[key] = (data as any)[key];
        }
      }
    }
  }
  // #endregion Properties (7)
}
