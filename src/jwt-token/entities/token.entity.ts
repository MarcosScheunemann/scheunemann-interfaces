import { IToken } from '../interfaces';

export class TokenEntity implements IToken {
  // #region Properties (14)

  public active: boolean = true;
  public companyId: string | null = '';
  public companyName: string = '';
  public containerId: string | null = '';
  public createdAt: number = Date.now();
  public customerId: string | null = '';
  public description: string = '';
  public expiresAt: number = Date.now();
  public id: string = '';
  public lastAccessAt: number = Date.now();
  public name: string = '';
  public partnerId: string | null = '';
  public sandbox: boolean = false;
  public value: string = '';

  // #endregion Properties (14)

  // #region Constructors (1)

  constructor(data?: Partial<TokenEntity>) {
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
