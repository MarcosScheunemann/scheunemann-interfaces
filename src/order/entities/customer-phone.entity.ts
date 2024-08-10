import { IOrdersCustomerPhone } from '../interfaces';

export class OrdersCustomerPhoneEntity implements IOrdersCustomerPhone {
    // #region Properties (4)

    public description: string = '';
    public localizer: string = '';
    public localizerExpiration: string = '';
    public number: string = '';

    // #endregion Properties (4)

    // #region Constructors (1)

    constructor(data?: Partial<OrdersCustomerPhoneEntity>) {
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
