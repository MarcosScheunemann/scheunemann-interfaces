import { ECampaignStatus } from '../enums';

export interface ICampaign {
  // #region Properties (11)

  createdAt: Date;
  createdBy: string;
  description: string;
  endDate: Date;
  id: string;
  name: string;
  partnerId?: string[];
  startDate: Date;
  status: ECampaignStatus;
  updatedAt: Date;

  // #endregion Properties (11)
}
