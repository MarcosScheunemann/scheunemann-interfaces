import { EDesenfilaFrom } from '../../general';
import { EMpStatus, EMpStatusDetail, EOperationType, EPaymentMethodId, EReleaseStatus, ETransactionStatus } from '../enums';
import { ITransactionBalance } from './i-balance';
import { IFeeDetail } from './i-fee-detail';
import { ITransactionPaymentMethod } from './i-payment-method';
import { ITransactionTotal } from './i-total';

export interface ITransaction {
  // #region Properties (30)

  balance: ITransactionBalance | null;
  card: {};
  containerId: string;
  createdAt: Date;
  dateApproved: Date | null;
  dateCreated: Date;
  dateLastUpdated: Date;
  dateOfExpiration: Date | null;
  description: string;
  externalOrderReference: string;
  feeDetails: IFeeDetail[];
  from: EDesenfilaFrom;
  id: string;
  installments: number;
  liveMode: boolean;
  merchantId: string;
  moneyReleaseDate: Date | null;
  moneyReleaseStatus: EReleaseStatus;
  operationType: EOperationType;
  paymentMethod: ITransactionPaymentMethod | null;
  paymentMethodId: EPaymentMethodId;
  posId: string;
  referenceId: 'goLive' | 'engine_mobyo_fee' | 'withdraw' | string;
  status: EMpStatus;
  statusDetail: EMpStatusDetail;
  total: ITransactionTotal | null;
  transactionAmount: number;
  transactionAmountRefunded: number;
  transactionStatus: ETransactionStatus;
  updatedAt: Date;

  // #endregion Properties (30)
}
