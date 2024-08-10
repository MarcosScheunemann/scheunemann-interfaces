import { PaymentTokenDataEntity } from './payment-token-data.entity';

export class PaymentTokenEntity {
    // #region Properties (5)

    public customerId: string = '';
    public data: PaymentTokenDataEntity = new PaymentTokenDataEntity();
    public description: string = '';
    public id: string = '';
    public itemType: string = '';

    // #endregion Properties (5)

    // #region Constructors (1)

    constructor(data?: Partial<PaymentTokenEntity>) {
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
