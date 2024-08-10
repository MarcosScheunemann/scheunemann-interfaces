import { EDocType } from '../../general';

export interface ISubscriptionCustomerProfile {
  // #region Properties (6)

  doc: string | null;
  docType: EDocType;
  id: string | null;
  imageUrl: string | null;
  name: string | null;
  email: string | null;
  phoneNumber: string | null;
  uid: string | null;

  // #endregion Properties (6)
}
