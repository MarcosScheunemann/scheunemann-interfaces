import { EDocType, IAddress } from '../../general';

export interface IInvoicePayer {
  // #region Properties (6)

  address: IAddress;
  doc: string;
  docType: EDocType;
  email: string;
  internationalCode: string;
  name: string;
  phoneNumber: string | null;

  // #endregion Properties (6)
}
