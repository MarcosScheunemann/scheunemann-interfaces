import { ICarouselImage } from '../interfaces';

export class CarouselImageEntity implements ICarouselImage {
    // #region Properties (3)

    caption?: string = '';
    public id: string = '';
    public url: string = '';

    // #endregion Properties (3)

    // #region Constructors (1)

    constructor(data?: Partial<CarouselImageEntity>) {
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