import { IAddress } from '../interfaces';
import { CoordsEntity } from './coords.entity';

export class AddressEntity implements IAddress {
  // #region Properties (8)

  public city: string = '';
  public complement: string | null = '';
  public coords: CoordsEntity = new CoordsEntity();
  public neighborhood: string = '';
  public postalCode: string = '';
  public state: string = '';
  public streetName: string = '';
  public streetNumber: string = '';

  // #endregion Properties (8)

  // #region Constructors (1)

  constructor(data?: Partial<AddressEntity>) {
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
