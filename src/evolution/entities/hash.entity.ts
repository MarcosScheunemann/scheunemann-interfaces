import { IEvolutionHash } from '../interfaces';

export class EvolutionHashEntity implements IEvolutionHash {
  // #region Properties (1)

  public apikey: string = '';

  // #endregion Properties (1)

  // #region Constructors (1)

  constructor(data?: Partial<EvolutionHashEntity>) {
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
