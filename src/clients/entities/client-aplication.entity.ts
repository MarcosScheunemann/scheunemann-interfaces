import { IClientAplication } from '../interfaces/i-client-aplication';
import { IClientAplicationCredential } from '../interfaces/i-client-credential';
import { ClientAplicationCredentialEntity } from './client-aplication-credential.entity';

export class ClientAplicationEntity implements IClientAplication {
  // #region Properties (3)

  public credential: IClientAplicationCredential = new ClientAplicationCredentialEntity();
  public description: string | null = null;
  public name: string = '';

  // #endregion Properties (3)

  // #region Constructors (1)

  constructor(data?: Partial<ClientAplicationEntity>) {
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
