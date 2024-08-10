// import { SetOrderItemV3Dto } from '../usercases-v3/set-item-v3/set-item-v3.dto';
import { IOrderScaleItem } from './i-scale-item';
export interface IOrderScale {
    // #region Properties (2)

    defaultPrice: number;
    scales: IOrderScaleItem[];

    // #endregion Properties (2)
}
