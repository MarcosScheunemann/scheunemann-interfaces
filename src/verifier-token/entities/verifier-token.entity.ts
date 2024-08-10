import { IVerifierToken } from '../interfaces/i-verifier-token';

export class VerifierTokenEntity implements IVerifierToken {
  // #region Properties (9)

  public appId: string | null = null;
  public createdAt: number = Date.now();
  public expiresAt: number = Date.now() + 1000 * 60 * 30;
  public id: string = '';
  public message: string = '';
  public receiver: string = '';
  public value: string = '';
  public verified: boolean = false;
  public verifiedAt: number = 0;

  // #endregion Properties (9)

  // #region Constructors (1)

  constructor(data?: Partial<VerifierTokenEntity>) {
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
