import { EAppType } from '../../app';
import { EDocType, IAddress, IDeliveryArea, IDeliveryAreaFixed, IPaymentProvider } from '../../general';
import { ISubscriptionCustomer } from '../../subscription-customer';
import { ECustomerInterval, ECustomerStatus, ECustomerType } from '../enums';

export interface ICustomer {
  // #region Properties (31)

  address: IAddress;
  blockedReason: string | null;
  createdAt: Date;
  deliveryArea: IDeliveryArea[];
  deliveryAreaFixed?: IDeliveryAreaFixed | null;
  doc: string;
  docType: EDocType;
  email: string;
  fullName: string;
  id: string;
  internationalCode: string;
  imageUrl: string | null;
  interval: ECustomerInterval;
  limit: number;
  name: string;
  password: string;
  paymentProvider: IPaymentProvider;
  phoneNumber: string;
  phoneNumberVerified: boolean;
  phoneNumberVerifiedApp: EAppType | null;
  phoneNumberVerifiedAt: Date | null;
  phoneNumbersNotification: string[];
  refreshToken: string | null;
  sandbox: boolean;
  status: ECustomerStatus;
  subscription: ISubscriptionCustomer | null;
  tags: string[];
  token: string | null;
  twoStepsVerification: boolean;
  type: ECustomerType;
  updatedAt: Date;

  // #endregion Properties (31)
}
