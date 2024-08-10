import { IEvolutionDatabaseQueue } from '../interfaces/i-evolution-database-queue';

export class EvolutionDatabaseQueueEntity implements IEvolutionDatabaseQueue {
  // #region Properties (11)

  public active: boolean = true;
  public baseUrl: string = '';
  public createdAt: number = Date.now();
  public id: string = '';
  public instanceName: string = '';
  public globalApikey: string = '';
  public log: string[] = [];
  public sendAt: number = 1713547959155;
  public notified: boolean = false;
  public notifiedAt: number = 0;
  public phoneNumber: string = '';
  public text: string = '';
  public updatedAt: number = Date.now();

  // #endregion Properties (11)

  // #region Constructors (1)

  constructor(data?: Partial<EvolutionDatabaseQueueEntity>) {
    if (data) {
      for (let key in data) {
        if (data.hasOwnProperty(key) && key in this) {
          (this as any)[key] = (data as any)[key];
        }
      }
    }
  }
}
