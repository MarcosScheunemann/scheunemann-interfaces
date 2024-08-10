import { IRating } from '../interfaces/i-rating';

export class RatingEntity implements IRating {
    // #region Properties (4)

    comment?: string = '';
    public createdAt: Date = new Date();
    public rating: number = 5;
    public userId: string = '';

    // #endregion Properties (4)

    // #region Constructors (1)

    constructor(data?: Partial<RatingEntity>) {
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