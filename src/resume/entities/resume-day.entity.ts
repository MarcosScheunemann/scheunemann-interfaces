import { IResumeDay } from '../interfaces';
import { ResumeHourEntity } from './resume-hour.entity';

export class ResumeDayEntity implements IResumeDay {
  // #region Properties (5)

  public average: number = 0;
  public count: number = 0;
  public day: number = new Date().getUTCDate();
  public dayName: string = new Date().toLocaleString('pt-BR', { weekday: 'long' });
  public months: ResumeHourEntity[] = [];
  public total: number = 0;

  // #endregion Properties (5)

  // #region Constructors (1)

  constructor(data?: Partial<ResumeDayEntity>) {
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
