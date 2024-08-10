import { IOrderItemOption } from '../interfaces';

export class OrderItemOptionEntity implements IOrderItemOption {
    // #region Properties (15)

    public ean: string = '';
    public externalCode: string = '';
    public id: string = '';
    public index: number = 0;
    public name: string = '';
    public options: OrderItemOptionEntity[] = [];
    public optionsPrice: number = 0;
    public preparationPlaceId: string = '';
    public price: number = 0;
    public productId: string = '';
    public quantity: number = 0;
    public skill: string = '';
    public totalPrice: number = 0;
    public unit: string = '';
    public weight: number = 0;

    // #endregion Properties (15)

    // #region Constructors (1)

    constructor(data?: Partial<OrderItemOptionEntity>) {
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
