import { IResumeTotal } from '../interfaces';
import { ResumeYearEntity } from './resume-year.entity';

export class ResumeTotalEntity implements IResumeTotal {
  // #region Properties (5)

  public average: number = 0;
  public collectionName: string = '';
  public count: number = 0;
  public total: number = 0;
  public years: ResumeYearEntity[] = [];

  // #endregion Properties (5)

  // #region Constructors (1)

  constructor(data?: Partial<ResumeTotalEntity>) {
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
