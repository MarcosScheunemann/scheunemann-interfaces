import { IResumeMonth } from './i-resume-month';

export interface IResumeYear {
  // #region Properties (10)

  total: number;
  year: number;
  average: number;
  count: number;
  months: IResumeMonth[];
  // #endregion Properties (10)
}
