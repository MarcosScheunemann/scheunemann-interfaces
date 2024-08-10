import { IClientAplicationCredential } from './i-client-credential';

export interface IClientAplication {
  // #region Properties (3)

  credential: IClientAplicationCredential;
  description: string | null;
  name: string;

  // #endregion Properties (3)
}
