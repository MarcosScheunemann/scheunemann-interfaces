import { EFcmSkill } from '../enums/skill.enum';
import { IFcmDataRequestItems } from '../interfaces/i-fcm-data-request-items';

export class FcmDataRequestItemsEntity implements IFcmDataRequestItems {
  // #region Properties (5)

  public callback: string = '';
  public companyId: string = '';
  public containerId: string = '';
  public pos: string = '';
  public skill: EFcmSkill = EFcmSkill.RECEIVED_NATI_V1_ITEMS;

  // #endregion Properties (5)

  // #region Constructors (1)

  constructor(data?: Partial<FcmDataRequestItemsEntity>) {
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
