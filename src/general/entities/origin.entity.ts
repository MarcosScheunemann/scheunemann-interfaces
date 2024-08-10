import { ELeadOrigin } from '../enums/lead-origin.enum';

export class OriginEntity {
  // #region Properties (6)

  campaign?: string = '';
  contactPoint?: string = '';
  public date: Number = 0;
  details?: string = '';
  referrer?: string = '';
  public type: ELeadOrigin = ELeadOrigin.OTHERS;

  // #endregion Properties (6)

  // #region Constructors (1)

  constructor(data?: Partial<OriginEntity>) {
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
