import { EVoucherRuleType } from '../enums/rule-types.enum';

export interface IVoucherRule {
  type: EVoucherRuleType;
  value?: string | number | Date | boolean;
  description: string;
}
