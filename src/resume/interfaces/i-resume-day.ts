import { IResumeHour } from './i-resume-hour';

export interface IResumeDay {
  // #region Properties (10)

  total: number;
  day: number;
  dayName: string;
  average: number;
  count: number;
  months: IResumeHour[];
  // #endregion Properties (10)
}
