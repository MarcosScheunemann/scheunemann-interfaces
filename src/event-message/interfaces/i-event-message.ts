import { EEventMessage } from '../enums';

export interface IEventMessage {
  // #region Properties (6)

  createdAt: Date;
  containerId: string | null;
  companyId: string | null;
  customerId: string | null;
  partnerId: string | null;
  description: string | null;
  event: EEventMessage;
  id: string;
  recipients: string[];
  updatedAt: Date;

  // #endregion Properties (6)
}
