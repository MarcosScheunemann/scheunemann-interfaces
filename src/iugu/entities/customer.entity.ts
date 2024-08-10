/* eslint-disable id-blacklist */
import { IIuguCustomer } from '../interfaces';
import { IuguPaymentTokenEntity } from './payment-token.entity';

export class IuguCustomerEntity implements IIuguCustomer {
    // #region Properties (21)

    public ccEmails: string = '';
    public city: string = '';
    public complement: string = '';
    public cpfCnpj: string = '';
    public createdAt: Date = new Date();
    public customVariables: Array<any> = [];
    public defaultPaymentMethodId: string = '';
    public district: string = '';
    public email: string = '';
    public id: string = '';
    public name: string = '';
    public notes: string = '';
    public number: string = '';
    public paymentMethods: IuguPaymentTokenEntity[] = [];
    public phone: string = '';
    public phonePrefix: string = '';
    public proxyPaymentsFromCustomerId: string = '';
    public state: string = '';
    public street: string = '';
    public updatedAt: Date = new Date();
    public zipCode: string = '';

    // #endregion Properties (21)

    // #region Constructors (1)

    constructor(data?: Partial<IuguCustomerEntity>) {
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
