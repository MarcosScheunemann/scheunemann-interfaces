import { AddressEntity } from '../../general';
import { EFiscalDocModelCode } from '../../general/enums/fiscal-doc-model-code.enum';
import { EAppMode } from '../enums';
import { IRabbit } from '../interfaces/i-rabbit';

export class RabbitEntity implements IRabbit {
  // #region Properties (22)

  public address: AddressEntity = new AddressEntity();
  public api: string = 'http://localhost:8089';
  public cityCode: string = '';
  public doc: string = '';
  public emitirL: boolean = true;
  public enviroment: 'production' | 'development' = 'production';
  public ie: string = '';
  public ignoreCpfCnpj: boolean = false;
  public model: EFiscalDocModelCode = EFiscalDocModelCode.NFCE;
  public name: string = '';
  public nfNumber: number = 1;
  public onlyCash: boolean = false;
  public controlPix: boolean = true;
  public pdvId: number | null = null;
  public percentage: number = 50;
  public regime: 1 | 2 | 3 = 1;
  public serialNumber: string = '';
  public signature: string = '';
  public syncAt: number = 0;
  public type: EAppMode = EAppMode.RABBIT;
  public ufCode: number | null = null;
  public updatedAt: Date = new Date();
  public version: string = '1.0.0';

  // #endregion Properties (22)

  // #region Constructors (1)

  constructor(data?: Partial<RabbitEntity>) {
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
