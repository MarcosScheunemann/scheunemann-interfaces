import {
  EDocType,
  IAddress,
  IDeliveryArea,
  IDeliveryAreaFixed,
  IMessagerChannel,
  IMobyoApiConfig,
  IOrigin,
  IPaymentProvider,
} from '../../general';
import { IInstallation } from '../../installation';
import { ICompanyContact } from './i-company-contact';
import { ICompanyTrialPlansUsed } from './i-company-trial-useds';

export interface ICompany {
  // #region Properties (25)

  active: boolean;
  address: IAddress;
  bgImageUrl: string | null;
  config: IMobyoApiConfig | null;
  containerId: string;
  createdAt: Date;
  deliveryArea: IDeliveryArea[];
  deliveryAreaFixed?: IDeliveryAreaFixed | null;
  phoneNumbersNotification: string[];
  doc: string;
  docType: EDocType;
  email: string;
  fullName: string;
  id: string;
  imageUrl: string | null;
  internationalCode: string;
  logoUrl: string | null;
  /**@deprecated
   * Use phoneNumberNotification instead
   */
  messagerChannels: IMessagerChannel[];
  name: string;
  usedTrialsPlans: ICompanyTrialPlansUsed[];
  origin: IOrigin;
  paymentProvider: IPaymentProvider;
  phoneNumber: string;
  sandbox: boolean;
  goTransactionsLive: boolean;
  tags: string[];
  updatedAt: Date;
  version: string;
  installationDesenfila?: IInstallation;
  pixKey: string;
  contacts: ICompanyContact[];
  
}
