import { IEvolutionInstance } from '../../evolution';
import { EWaServerStatus } from '../enums';
import { IWaServer } from '../interfaces';

export class WaServerEntity implements IWaServer {
  // #region Properties (12)

  public active: boolean = false;
  public baseUrl: string = '';
  public createdAt: Date = new Date();
  public globalApiKey: string = '';
  public id: string = '';
  public instances: IEvolutionInstance[] = [];
  public name: string = '';
  public sessions: number = 0;
  public stack: string = '';
  public status: EWaServerStatus = EWaServerStatus.STOPPED;
  public tags: string[] = [];
  public updatedAt: Date = new Date();

  // #endregion Properties (12)

  // #region Constructors (1)

  constructor(data?: Partial<WaServerEntity>) {
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
