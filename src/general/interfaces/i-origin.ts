import { ELeadOrigin } from '../enums/lead-origin.enum';

export interface IOrigin {
  // #region Properties (6)

  campaign?: string;
  contactPoint?: string;
  date: Number;
  details?: string;
  referrer?: string;
  type: ELeadOrigin;

  // #endregion Properties (6)
}
