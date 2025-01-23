import { BaseEntity } from '../../general';
import { EMemberRules, EMemberType } from '../enums';
import { IMember } from '../interfaces';

export class MemberEntity extends BaseEntity implements IMember {
  // #region Properties (14)

  public active: boolean = true;
  public companyName: string = '';
  public containerName: string = '';
  public email: string = '';
  public name: string = '';
  public partnerId: string = '';
  public internationalCode: string = '55';
  public phoneNumber: string = '';
  public phoneNumberVerified: boolean = false;
  public phoneNumberVerifiedAt: Date | null = null;
  public photoUrl: string = '';
  public rule: EMemberRules = EMemberRules.USER;
  public tags: string[] = [];
  public type: EMemberType = EMemberType.CLIENT;
  public uid: string = '';

  // #endregion Properties (14)

  // #region Constructors (1)

  constructor(data?: Partial<MemberEntity>) {
    super(data);
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
