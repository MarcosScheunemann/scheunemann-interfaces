export class CoordsEntity {
    // #region Properties (2)

    public latitude: number = 0;
    public longitude: number = 0;

    // #endregion Properties (2)

    // #region Constructors (1)

    constructor(data?: Partial<CoordsEntity>) {
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
