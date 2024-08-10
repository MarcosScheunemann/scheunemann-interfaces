import { EDiscountType } from '../../general';
import { ESponsorIdentifier } from '../../transaction';

export interface ISponsorFee {
  type: EDiscountType;
  amount: number;
  method: ESponsorIdentifier;
}
