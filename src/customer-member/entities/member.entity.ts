import { MemberEntity } from '../../member';
import { ICustomerMember } from '../interfaces';

export class CustomerMemberEntity extends MemberEntity implements ICustomerMember {
  // #region Properties (1)

  public customerId: string = '';

  // #endregion Properties (1)

  // #region Constructors (1)

  constructor(data?: Partial<CustomerMemberEntity>) {
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
