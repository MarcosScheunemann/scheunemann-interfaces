import { IResumeCollectionStatus } from './i-resume-collection-status';

export interface IResumeCollection {
  // #region Properties (2)

  collectionName: string;
  status: IResumeCollectionStatus[];

  // #endregion Properties (2)
}
