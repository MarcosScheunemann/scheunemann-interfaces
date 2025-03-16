import { EDiscountType} from '../../general';
import { EVoucherStatus } from '../enums';
import { EVoucherTargetTypes } from '../enums/target-types.enum';
import { IVoucherRule } from './i-voucher-rule';
import { IVoucherSponsorship } from './i-voucher-sponsorship';

export interface IVoucher {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  active : boolean;
  concludedAt: Date | null;
  isPublic: boolean;
  key: string;
  name: string;
  activatedAt: Date | null;
  rules: IVoucherRule[];
  type: EDiscountType;
  amount: number; // soma dos values dos sponsorships
  sponsorship: IVoucherSponsorship[]; // o valor total da campanha necessariamente precisa estar aqui
  status: EVoucherStatus;
  targetsId: string[];
  targetType: EVoucherTargetTypes;
  limit: number;
  isExclusive: boolean;
  usedCount: number;
}
