import { IOrderTotal } from '../interfaces';

export class OrderTotalEntity implements IOrderTotal {
    // #region Properties (5)

    public additionalFees: number = 0;
    public benefits: number = 0;
    public deliveryFee: number = 0;
    public orderAmount: number = 0;
    public subTotal: number = 0;

    // #endregion Properties (5)

    // #region Constructors (1)

    constructor(data?: Partial<OrderTotalEntity>) {
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
