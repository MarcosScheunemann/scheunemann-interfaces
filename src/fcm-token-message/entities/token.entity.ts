import { IFcmTokenMessage } from '../interfaces/i-token';

export class FcmTokenMessageEntity implements IFcmTokenMessage {
  // #region Properties (11)

  public companyId: string | null = null;
  public containerId: string | null = null;
  public createdAt: Date = new Date();
  public customerId: string | null = null;
  public deviceId: string | null = null;
  public id: string = '';
  public name: string | null = null;
  public partnerId: string | null = null;
  public updatedAt: Date = new Date();
  public value: string = '';

  // #endregion Properties (11)

  // #region Constructors (1)

  constructor(data?: Partial<FcmTokenMessageEntity>) {
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
