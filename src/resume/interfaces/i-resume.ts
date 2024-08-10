import { IResumeCollection } from './i-resume-collection';
import { IResumeTotal } from './i-resume-total';

export interface IResume {
  // #region Properties (1)

  counts: IResumeCollection[];
  totals: IResumeTotal[];
  id: string;

  // #endregion Properties (1)
}
