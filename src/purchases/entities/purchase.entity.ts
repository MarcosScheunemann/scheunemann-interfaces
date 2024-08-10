import { EPaymentProvider } from '../../general/enums/providers.enum';
import { OrderEntity } from '../../order';
import { AppInfoEntity } from './app-info.entity';

export class PurchaseEntity extends OrderEntity {
  // #region Properties (4)

  public additionalNotes?: string = '';
  public appInfo: AppInfoEntity = new AppInfoEntity();
  public deviceUid: string = '';
  public providerName: EPaymentProvider = EPaymentProvider.IUGU;

  // #endregion Properties (4)

  // #region Constructors (1)

  constructor(data?: Partial<PurchaseEntity>) {
    super(data);
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
