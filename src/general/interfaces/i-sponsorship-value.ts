import { ESponsorshipValues } from '../enums/sponsorship-values.enum';

export interface ISponsorshipValue {
  // #region Properties (2)

  // fornecedor
  name: ESponsorshipValues | string;
  // valor pode representar um desconto fixo ou percentual fornecido pelo patrocinador
  value: number;

  // #endregion Properties (2)
}
