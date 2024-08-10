import { IuguPaymentTokenDataEntity } from './payment-token-data.entity';

export class IuguPaymentTokenEntity {
    // #region Properties (5)

    public customerId: string = '';
    public data: IuguPaymentTokenDataEntity = new IuguPaymentTokenDataEntity();
    public description: string = '';
    public id: string = '';
    public itemType: string = '';

    // #endregion Properties (5)

    // #region Constructors (1)

    constructor(data?: Partial<IuguPaymentTokenEntity>) {
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
