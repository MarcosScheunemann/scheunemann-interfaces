import { EDiscountType } from '../../general';
import { EVoucherStatus, EVoucherTargetTypes } from '../enums';
import { IVoucher, IVoucherRule, IVoucherSponsorship } from '../interfaces';

export class VoucherEntity implements IVoucher {
  public concludedAt: Date | null = null;
  public createdAt: Date = new Date();
  public id: string = '';
  public isPublic: boolean = false;
  public key: string = '';
  public name: string = '';
  public activatedAt: Date | null = null;
  public rules: IVoucherRule[] = [];
  public type: EDiscountType = EDiscountType.PERCENT;
  public amount: number = 0;
  public sponsorship: IVoucherSponsorship[] = [];
  public status: EVoucherStatus = EVoucherStatus.PLACED;
  public targetsId: string[] = [];
  public targetType: EVoucherTargetTypes = EVoucherTargetTypes.CART;
  public updatedAt: Date = new Date();
  public limit: number = 0;
  public isExclusive: boolean = false;
  public usedCount: number = 0;
  public active: boolean = true;

  constructor(data?: Partial<VoucherEntity>) {
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
