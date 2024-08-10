import { IIuguPaymentTokenData } from './i-payment-token-data';

export interface IIuguPaymentToken {
    // #region Properties (5)

    customerId: string;
    data: IIuguPaymentTokenData;
    description: string;
    id: string;
    itemType: string;

    // #endregion Properties (5)
}
