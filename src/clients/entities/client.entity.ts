import { EDocType, IAddress } from '../../general';
import { IClient } from '../interfaces';
import { IClientAplication } from '../interfaces/i-client-aplication';

export class ClientEntity implements IClient {
  // #region Properties (7)

  public address: IAddress | null = null;
  public aplications: IClientAplication[] = [];
  public doc: string | null = null;
  public docType: EDocType = EDocType.CPF;
  public email: string | null = null;
  public id: string = '';
  public name: string = '';

  // #endregion Properties (7)

  // #region Constructors (1)

  constructor(data?: Partial<ClientEntity>) {
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
