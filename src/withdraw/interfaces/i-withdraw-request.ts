import { EWithdrawRequestStatus } from '../enums';

export interface IWithdrawRequest {
  // #region Properties (12)

  amount: number;
  containerId: string;
  createdAt: Date;
  aprovedAt: Date | null;
  id: string;
  liveMode: boolean;
  merchantId: string;
  status: EWithdrawRequestStatus;
  transactionId: string | null;
  transferDocumentUrl: string | null;
  updatedAt: Date;

  // #endregion Properties (12)
}
