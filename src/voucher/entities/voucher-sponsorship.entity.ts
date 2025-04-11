import { IVoucherSponsorship } from '../interfaces';

export class VoucherSponsorshipEntity implements IVoucherSponsorship {
  // #region Properties (10)
  public name: string = 'MERCHANT';
  public value: number = 0;

  constructor(data?: Partial<VoucherSponsorshipEntity>) {
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
