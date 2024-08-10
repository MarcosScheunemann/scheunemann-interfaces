// import { SetOrderItemV3Dto } from '../usercases-v3/set-item-v3/set-item-v3.dto';
import { IOrderItemComposition } from './i-item-composition';
import { IOrderItemOption } from './i-item-option';
import { IOrderScale } from './i-scale-price';

export interface IOrderItem {
    // #region Properties (20)

    composition: IOrderItemComposition[];
    ean: string;
    externalCode: string;
    id: string;
    index: number;
    name: string;
    observations: string;
    options: IOrderItemOption[];
    optionsPrice: number;
    picture: string;
    preparationPlaceId: string;
    price: number;
    productId: number;
    quantity: number;
    scalePrices: IOrderScale;
    skill: string;
    totalPrice: number;
    unit: string;
    unitPrice: number;
    weight: number;

    // #endregion Properties (20)
}
