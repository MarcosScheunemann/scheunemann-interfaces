import { IAddress, IPaymentProvider } from '../../general';
import { EDocType } from '../../general/enums';

export interface IPartner {
  // #region Properties (18)

  active: boolean;
  address: IAddress;
  doc: string;
  docType: EDocType;
  email: string;
  level: number;
  fullName: string;
  id: string;
  imageUrl?: string;
  internationalCode: string;
  logoUrl?: string;
  name: string;
  paymentProvider: IPaymentProvider;
  phoneNumber: string;
  sandbox: boolean;
  tags: string[];
  updatedAt: Date;
  version: string;

  // #endregion Properties (18)
}
