import { ECampaignStatus } from '../enums';
import { ICampaign } from '../interfaces';

export class CampaignEntity implements ICampaign {
  // #region Properties (10)

  public createdAt: Date = new Date();
  public createdBy: string = '';
  public description: string = '';
  public endDate: Date = new Date(Date.now() + 1000 * 60 * 60 * 24 * 30);
  public id: string = '';
  public name: string = '';
  partnerId?: string[] = [];
  public startDate: Date = new Date();
  public status: ECampaignStatus = ECampaignStatus.PLACED;
  public updatedAt: Date = new Date();

  // #endregion Properties (10)

  // #region Constructors (1)

  constructor(data?: Partial<CampaignEntity>) {
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
