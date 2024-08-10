import { IEvolutionChatWoot, IEvolutionInstance } from '../interfaces';

export class EvolutionInstanceEntity implements IEvolutionInstance {
  // #region Properties (10)

  public apikey: string = '';
  public chatwoot: IEvolutionChatWoot | null = null;
  public instanceId: string = '';
  public instanceName: string = '';
  public owner: string | null = '';
  public profileName: string | null = '';
  public profilePictureUrl: string | null = '';
  public profileStatus: string | null = '';
  public serverUrl: string = '';
  public status: string = '';

  // #endregion Properties (10)

  // #region Constructors (1)

  constructor(data?: Partial<EvolutionInstanceEntity>) {
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
