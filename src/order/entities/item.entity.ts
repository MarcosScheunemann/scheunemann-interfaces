import { IOrderItem } from '../interfaces';
import { OrderItemCompositionEntity } from './item-composition.entity';
import { OrderItemOptionEntity } from './item-option.entity';
import { OrderScaleEntity } from './scale-price.entity';

export class OrderItemEntity implements IOrderItem {
    // #region Properties (20)

    public composition: OrderItemCompositionEntity[] = [];
    public ean: string = '';
    public externalCode: string = '';
    public id: string = '';
    public index: number = 0;
    public name: string = '';
    public observations: string = '';
    public options: OrderItemOptionEntity[] = [];
    public optionsPrice: number = 0;
    public picture: string = '';
    public preparationPlaceId: string = '';
    public price: number = 0;
    public productId: number = 0;
    public quantity: number = 0;
    public scalePrices: OrderScaleEntity = new OrderScaleEntity();
    public skill: string = '';
    public totalPrice: number = 0;
    public unit: string = '';
    public unitPrice: number = 0;
    public weight: number = 0;

    // #endregion Properties (20)

    // #region Constructors (1)

    constructor(data?: Partial<OrderItemEntity>) {
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
