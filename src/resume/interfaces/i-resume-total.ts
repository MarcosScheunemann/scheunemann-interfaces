import { IResumeYear } from './i-resume-year';

export interface IResumeTotal {
  // #region Properties (10)

  collectionName: string;
  total: number;
  average: number;
  count: number;
  years: IResumeYear[];

  // #endregion Properties (10)
}
