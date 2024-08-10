import { IResumeYear } from '../interfaces';
import { ResumeMonthEntity } from './resume-month.entity';

export class ResumeYearEntity implements IResumeYear {
  // #region Properties (5)

  public average: number = 0;
  public count: number = 0;
  public months: ResumeMonthEntity[] = [];
  public year: number = new Date().getUTCFullYear();
  public total: number = 0;

  // #endregion Properties (5)

  // #region Constructors (1)

  constructor(data?: Partial<ResumeYearEntity>) {
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
