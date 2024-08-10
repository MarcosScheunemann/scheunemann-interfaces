import { IResumeCollectionStatus } from '../interfaces/i-resume-collection-status';

export class ResumeCollectionStatusEntity implements IResumeCollectionStatus {
  // #region Properties (6)

  public count: number = 0;
  public status: string = '';

  // #endregion Properties (6)

  // #region Constructors (1)

  constructor(data?: Partial<ResumeCollectionStatusEntity>) {
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
