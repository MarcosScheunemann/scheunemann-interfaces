import { EEvolutionInstanceType } from '../../evolution';

// #region Interfaces (3)

// #endregion Interfaces (3)

// #region Classes (1)

export class NatiWaEntity {
  // #region Properties (10)

  public chatwoot = null;
  public id: string = '';
  public instanceName: string = '';
  public number: string = '';
  public qrcode: boolean = false;
  public token: string = '';
  public type: EEvolutionInstanceType = EEvolutionInstanceType.WEBHOOK;
  public typebot = null;
  public waServerId: string = '';
  public webhook = null;

  // #endregion Properties (10)

  // #region Constructors (1)

  constructor(data?: Partial<NatiWaEntity>) {
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

// #endregion Classes (1)
