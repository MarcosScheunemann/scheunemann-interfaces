import { IOrderCustomer } from '../interfaces';
import { OrdersCustomerPhoneEntity } from './customer-phone.entity';

export class OrderCustomerEntity implements IOrderCustomer {
    // #region Properties (7)

    public documentNumber: string = '';
    public email: string = '';
    public id: string = '';
    public name: string = '';
    public ordersCountOnMerchant: number = 0;
    public phone: OrdersCustomerPhoneEntity = new OrdersCustomerPhoneEntity();
    public picture: string = '';

    // #endregion Properties (7)

    // #region Constructors (1)

    constructor(data?: Partial<OrderCustomerEntity>) {
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
