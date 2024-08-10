import { IResumeDay } from './i-resume-day';

export interface IResumeMonth {
  // #region Properties (10)

  total: number;
  month: number;
  monthName: string;
  average: number;
  count: number;
  days: IResumeDay[];
  // #endregion Properties (10)
}
