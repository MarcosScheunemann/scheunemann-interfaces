import { IResumeMonth } from '../interfaces';
import { ResumeDayEntity } from './resume-day.entity';

export class ResumeMonthEntity implements IResumeMonth {
  // #region Properties (5)

  public average: number = 0;
  public count: number = 0;
  public days: ResumeDayEntity[] = [];
  public month: number = new Date().getUTCMonth();
  public monthName: string = new Date().toLocaleString('pt-BR', { month: 'long' });
  public total: number = 0;

  // #endregion Properties (5)

  // #region Constructors (1)

  constructor(data?: Partial<ResumeMonthEntity>) {
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
