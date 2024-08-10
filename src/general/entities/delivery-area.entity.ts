import { CoordsEntity } from './coords.entity';

export class DeliveryAreaEntity {
    // #region Properties (8)

    public deliveryFee: number = 0;
    public id: string = '';
    public latlngs: CoordsEntity[] = [];
    public maxTime: number = 0;
    public minTime: number = 0;
    public minimumOrderValue: number = 0;
    public name: string = '';
    public sequence: number = 0;

    // #endregion Properties (8)

    // #region Constructors (1)

    constructor(data?: Partial<DeliveryAreaEntity>) {
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
