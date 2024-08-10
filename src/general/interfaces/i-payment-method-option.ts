import { EPaymentChannel } from '../enums/payment-channel.enum';
import { EPaymentMode } from '../enums/payment-mode.enum';
import { EPaymentType } from '../enums/payment-type.enum';

export interface IPaymentMethodOption {
  // #region Properties (13)

  active: boolean;
  channel: EPaymentChannel;
  createdAt: Date;
  fee: number;
  id: string;
  index: number;
  maxAmount: number;
  minAmount: number;
  mode: EPaymentMode;
  name: string;
  token: string;
  type: EPaymentType;
  updatedAt: Date;

  // #endregion Properties (13)
}
