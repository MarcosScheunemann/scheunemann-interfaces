import { ICompanyTrialPlansUsed } from '../interfaces/i-company-trial-useds';

export class CompanyTrialPlansUsedEntity implements ICompanyTrialPlansUsed {
  // #region Properties (2)

  public activedAt: Date = new Date();
  public id: string = '';

  // #endregion Properties (2)

  // #region Constructors (1)

  constructor(data?: Partial<CompanyTrialPlansUsedEntity>) {
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
