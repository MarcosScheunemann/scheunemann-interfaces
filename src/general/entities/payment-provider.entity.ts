import { PaymentProviderAgentEntity } from './payment-provider-agent.entity';
import { PaymentTokenEntity } from './payment-token.entity';

export class PaymentProviderEntity {
    // #region Properties (13)

    public accountId: string = '';
    public active: boolean = false;
    public agent: PaymentProviderAgentEntity = new PaymentProviderAgentEntity();
    public customerId: string = '';
    public liveApiToken: string = '';
    public name: string = '';
    public paymentTokens: PaymentTokenEntity[] = [];
    public subscriptionId: string = '';
    subscriptions?: string = '';
    public testApiToken: string = '';
    public userApiToken: string = '';
    public verified: boolean = false;
    public verifiedAt: number = 0;

    // #endregion Properties (13)

    // #region Constructors (1)

    constructor(data?: Partial<PaymentProviderEntity>) {
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
