import { EPaymentMethodId, EPaymentTypeId } from '../enums';
import { ITransactionPaymentMethod, ITransactionTotal } from '../interfaces';

export class TransactionTotalEntity implements ITransactionTotal {

  public subTotal: number = 0;
  public fees: number = 0;
  public orderAmount: number = 0;



  constructor(data?: Partial<TransactionTotalEntity>) {
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
