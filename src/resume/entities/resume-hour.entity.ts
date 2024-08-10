import { IResumeHour } from '../interfaces';

export class ResumeHourEntity implements IResumeHour {
  // #region Properties (4)

  public average: number = 0;
  public count: number = 0;
  public hour: number = 0;
  public total: number = 0;

  // #endregion Properties (4)

  // #region Constructors (1)

  constructor(data?: Partial<ResumeHourEntity>) {
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
