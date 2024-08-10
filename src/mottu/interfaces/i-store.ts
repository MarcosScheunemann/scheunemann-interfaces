import { IMottuAddress } from './i-address';
import { IMottuStoreMatrix } from './i-store-matrix';
import { IMottuStoreResponsible } from './i-store-responsible';

export interface IMottuStore {
  // #region Properties (9)

  address: IMottuAddress;
  balance: number;
  cnpj: string;
  email: string;
  id: number;
  marketplaceBranchId: number;
  matrix: IMottuStoreMatrix;
  name: string;
  responsible: IMottuStoreResponsible;

  // #endregion Properties (9)
}
