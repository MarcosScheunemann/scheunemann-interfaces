import { IResumeCollection } from '../interfaces';
import { IResumeCollectionStatus } from '../interfaces/i-resume-collection-status';

export class ResumeCollectionEntity implements IResumeCollection {
  // #region Properties (2)

  public collectionName: string = '';
  public status: IResumeCollectionStatus[] = [];

  // #endregion Properties (2)

  // #region Constructors (1)

  constructor(data?: Partial<ResumeCollectionEntity>) {
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
