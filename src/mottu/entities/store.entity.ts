import { IMottuAddress, IMottuStore, IMottuStoreMatrix, IMottuStoreResponsible } from '../interfaces';
import { MottuAddressEntity } from './address.entity';
import { MottuStoreMatrixEntity } from './store-matrix.entity';
import { MottuStoreResponsibleEntity } from './store-responsible.entity';

export class MottuStoreEntity implements IMottuStore {
  // #region Properties (10)

  public address: IMottuAddress = new MottuAddressEntity();
  public balance: number = 0;
  public cnpj: string = '';
  public email: string = '';
  public id: number = 0;
  public marketplaceBranchId: number = 0;
  public matrix: IMottuStoreMatrix = new MottuStoreMatrixEntity();
  public name: string = '';
  public responsible: IMottuStoreResponsible = new MottuStoreResponsibleEntity();

  // #endregion Properties (10)

  // #region Constructors (1)

  constructor(data?: Partial<MottuStoreEntity>) {
    if (data) {
      for (let key in data) {
        if (data.hasOwnProperty(key) && key in this) {
          (this as any)[key] = (data as any)[key];
        }
      }
    }
  }

  // #endregion Constructors (1)
}
