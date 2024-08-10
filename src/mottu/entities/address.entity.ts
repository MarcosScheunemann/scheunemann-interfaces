import { IMottuAddress } from '../interfaces';

export class MottuAddressEntity implements IMottuAddress {
  // #region Properties (7)

  public city: 'SP' = 'SP';
  public complement: string = '';
  public neighborhood: string = '';
  public number: string = '';
  public state: 'SP' = 'SP';
  public street: string = '';
  public zipCode: string = '';

  // #endregion Properties (7)

  // #region Constructors (1)

  constructor(data?: Partial<MottuAddressEntity>) {
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
