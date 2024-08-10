import { IPaymentProviderAgent } from '../interfaces';

export class PaymentProviderAgentEntity implements IPaymentProviderAgent {
    // #region Properties (2)

    public accountId: string = '';
    public partnerId: string = '';
    name?: string = '';

    // #endregion Properties (2)

    // #region Constructors (1)

    constructor(data?: Partial<PaymentProviderAgentEntity>) {
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
