import { ICoords } from './i-coords';

export interface IDeliveryArea {
    // #region Properties (8)

    deliveryFee: number;
    id: string;
    latlngs: ICoords[];
    maxTime: number;
    minTime: number;
    minimumOrderValue: number;
    name: string;
    sequence: number;

    // #endregion Properties (8)
}
