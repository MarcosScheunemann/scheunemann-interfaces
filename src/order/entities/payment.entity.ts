import { IOrderPayment } from '../interfaces';
import { OrderPaymentMethodEntity } from './payment-method.entity'; // Ajuste este import de acordo com o caminho real do arquivo.

export class OrderPaymentEntity implements IOrderPayment {
    // #region Properties (3)

    public methods: OrderPaymentMethodEntity[] = [];
    public pending: number = 0;
    public prepaid: number = 0;

    // #endregion Properties (3)

    // #region Constructors (1)

    constructor(data?: Partial<OrderPaymentEntity>) {
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
