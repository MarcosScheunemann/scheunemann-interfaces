import { ICustomerCreditLimit } from '../interfaces/i-customer-credit-limit';

export class CustomerCreditLimitEntity implements ICustomerCreditLimit {
  // #region Properties (8)

  public amountUsed: number = 0;
  public currentBalance: number = 0;
  public creditLimit: number = 0;
  public companyId: string = '';
  public containerId: string = '';

  // #endregion Properties (8)

  // #region Constructors (1)

  constructor(data?: Partial<CustomerCreditLimitEntity>) {
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
