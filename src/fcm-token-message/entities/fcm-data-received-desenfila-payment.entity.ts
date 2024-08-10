import { EFcmSkill } from '../enums/skill.enum';
import { IFcmDataReceivedDesenfilaPayment } from '../interfaces/i-fcm-data-received-desenfila-payment';

export class FcmDataReceivedDesenfilaPaymentEntity implements IFcmDataReceivedDesenfilaPayment {
  // #region Properties (6)

  public callback: string = '';
  public companyId: string = '';
  public containerId: string = '';
  public id: string = '';
  public refId: string = '';
  public skill: EFcmSkill = EFcmSkill.RECEIVED_DESENFILA_PAYMENT;

  // #endregion Properties (6)

  // #region Constructors (1)

  constructor(data?: Partial<FcmDataReceivedDesenfilaPaymentEntity>) {
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
