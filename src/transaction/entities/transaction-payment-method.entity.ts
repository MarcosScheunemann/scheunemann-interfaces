import { EPaymentMethodId, EPaymentTypeId } from '../enums';
import { ITransactionPaymentMethod } from '../interfaces';

export class TransactionPaymentMethodEntity implements ITransactionPaymentMethod {

  public id: EPaymentMethodId = EPaymentMethodId.ACCOUNT_MONEY;
  public issuerId: string = '';
  public type: EPaymentTypeId = EPaymentTypeId.BANK_TRANSFER;


  constructor(data?: Partial<TransactionPaymentMethodEntity>) {
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
