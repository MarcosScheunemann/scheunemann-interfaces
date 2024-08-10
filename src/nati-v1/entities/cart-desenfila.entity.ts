import { INatiV1CartDesenfila } from '../interfaces/i-cart-desenfila';

export class NatiV1CartDesenfilaEntity implements INatiV1CartDesenfila {
  // #region Properties (2)

  public pixKey: string = '';
  public qrImage: string = '';

  // #endregion Properties (2)

  // #region Constructors (1)

  constructor(data?: Partial<NatiV1CartDesenfilaEntity>) {
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
