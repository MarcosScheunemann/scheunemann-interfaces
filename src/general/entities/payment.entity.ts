import { IPayment } from '../interfaces';
import { PaymentMethodEntity } from './payment-method.entity';

export class PaymentEntity implements IPayment {
  // #region Properties (3)

  public methods: PaymentMethodEntity[] = [];
  public pending: number = 0;
  public prepaid: number = 0;

  // #endregion Properties (3)

  // #region Constructors (1)

  constructor(data?: Partial<PaymentEntity>) {
    if (data) {
      for (let key in data) {
        if (data.hasOwnProperty(key) && key in this) {
          (this as any)[key] = (data as any)[key];
        }
      }
      if (data.methods) {
        this.methods = data.methods.map((method) => new PaymentMethodEntity(method));
      } else {
        this.methods = [];
      }
    }
  }

  // #endregion Constructors (1)
}
