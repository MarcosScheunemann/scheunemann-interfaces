import { EPaymentMethodId, EPaymentTypeId } from "../enums";

export interface ITransactionPaymentMethod {
  id: EPaymentMethodId;
  issuerId: string;
  type:  EPaymentTypeId;
}
