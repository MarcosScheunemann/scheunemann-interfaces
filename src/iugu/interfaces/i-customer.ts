/* eslint-disable id-blacklist */
import { IIuguPaymentToken } from './i-payment-token';

export interface IIuguCustomer {
    // #region Properties (21)

    ccEmails: string;
    city: string;
    complement: string;
    cpfCnpj: string;
    createdAt: Date;
    customVariables: Array<any>;
    defaultPaymentMethodId: string;
    district: string;
    email: string;
    id: string;
    name: string;
    notes: string;
    number: string;
    paymentMethods: IIuguPaymentToken[];
    phone: string;
    phonePrefix: string;
    proxyPaymentsFromCustomerId: string;
    state: string;
    street: string;
    updatedAt: Date;
    zipCode: string;

    // #endregion Properties (21)
}
