import { IOrderPaymentMethod } from './i-payment-method';

export interface IOrderPayment {
    // #region Properties (3)

    methods: IOrderPaymentMethod[];
    pending: number;
    prepaid: number;

    // #endregion Properties (3)
}
