import { IDesenfilaConfigMercadoPago } from './i-desenfila-config-mepa';

export interface IDesenfilaConfig {
  // #region Properties (2)

  id: string;
  active: boolean;
  mercadoPago: IDesenfilaConfigMercadoPago;

  // #endregion Properties (2)
}
