import { IAddress } from '../../general';
import { EDocType } from '../../general/enums/doc-type.enum';
import { IClientAplication } from './i-client-aplication';

export interface IClient {
  // #region Properties (1)

  name: string;
  address: IAddress | null;
  doc: string | null;
  aplications: IClientAplication[];
  email: string | null;
  docType: EDocType;
  id: string;

  // #endregion Properties (1)
}
