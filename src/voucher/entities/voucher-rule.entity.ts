import { EVoucherRuleType } from '../enums';
import { IVoucherRule } from '../interfaces';

export class CampaignRuleEntity implements IVoucherRule {
  // #region Properties (10)
  public type: EVoucherRuleType = EVoucherRuleType.MIN_VALUE;
  public value: string | number | Date | boolean = 0;
  public description: string = '';

  constructor(data?: Partial<CampaignRuleEntity>) {
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
