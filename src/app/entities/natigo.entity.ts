import { EAppMode } from '../enums';
import { INatigo } from '../interfaces/i-natigo';

export class NatiGoEntity implements INatigo {
  // #region Properties (8)

  public documentVerificationAllowed: boolean = false;
  public isForAdultsOnly: boolean = false;
  public openLockRequired: boolean = true;
  public syncAt: Date = new Date();
  public type: EAppMode = EAppMode.NATI_GO;
  public updatedAt: Date = new Date();
  public url: string = 'localhost:8080';
  public version: string = '1.0.0';

  // #endregion Properties (8)

  // #region Constructors (1)

  constructor(data?: Partial<NatiGoEntity>) {
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
