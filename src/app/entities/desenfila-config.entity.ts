import { IDesenfilaConfig } from '../interfaces/i-desenfila-config';
import { IDesenfilaConfigMercadoPago } from '../interfaces/i-desenfila-config-mepa';
import { DesenfilaConfigMercadoPagoEntity } from './desenfila-config-mepa.entity';

export class DesenfilaConfigEntity implements IDesenfilaConfig {
  // #region Properties (3)

  public active: boolean = true;
  public id: string = '';
  public mercadoPago: IDesenfilaConfigMercadoPago = new DesenfilaConfigMercadoPagoEntity();

  // #endregion Properties (3)

  // #region Constructors (1)

  constructor(data?: Partial<DesenfilaConfigEntity>) {
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
