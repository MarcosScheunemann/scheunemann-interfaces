import { EPaymentChannel } from '../enums/payment-channel.enum';
import { EPaymentMode } from '../enums/payment-mode.enum';
import { EPaymentType } from '../enums/payment-type.enum';
import { IPaymentMethodOption } from '../interfaces';

export class PaymentMethodOptionEntity implements IPaymentMethodOption {
  // #region Properties (13)

  public active: boolean = false;
  public channel: EPaymentChannel = EPaymentChannel.AUTOMATION;
  public createdAt: Date = new Date();
  public fee: number = 0;
  public id: string = '';
  public index: number = 0;
  public maxAmount: number = 0;
  public minAmount: number = 0;
  public mode: EPaymentMode = EPaymentMode.MANUAL;
  public name: string = '';
  public token: string = '';
  public type: EPaymentType = EPaymentType.CREDIT_CARD;
  public updatedAt: Date = new Date();

  // #endregion Properties (13)

  // #region Constructors (1)

  constructor(data?: Partial<PaymentMethodOptionEntity>) {
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
