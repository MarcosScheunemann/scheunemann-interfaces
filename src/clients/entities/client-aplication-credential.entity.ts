import { IClientAplicationCredential } from '../interfaces/i-client-credential';

export class ClientAplicationCredentialEntity implements IClientAplicationCredential {
  // #region Properties (4)

  public refreshToken: string | null = null;
  public refreshTokenAt: Date | null = null;
  public secrets: string | null = null;
  public token: string | null = null;

  // #endregion Properties (4)

  // #region Constructors (1)

  constructor(data?: Partial<ClientAplicationCredentialEntity>) {
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
