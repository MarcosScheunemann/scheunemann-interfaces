import { EWithdrawRequestStatus } from '../enums';
import { IWithdrawRequest } from '../interfaces/i-withdraw-request';

export class WithDrawRequestEntity implements IWithdrawRequest {
  // #region Properties (11)

  public amount: number = 0;
  public aprovedAt: Date | null = null;
  public containerId: string = '';
  public createdAt: Date = new Date();
  public id: string = '';
  public liveMode: boolean = false;
  public merchantId: string = '';
  public status: EWithdrawRequestStatus = EWithdrawRequestStatus.PENDING;
  public transactionId: string | null = null;
  public transferDocumentUrl: string | null = null;
  public updatedAt: Date = new Date();

  // #endregion Properties (11)

  // #region Constructors (1)

  constructor(data?: Partial<WithDrawRequestEntity>) {
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
