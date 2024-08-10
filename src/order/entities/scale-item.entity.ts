
export class OrderScaleItemEntity {
    // #region Properties (2)

    public minQuantity: number = 0;
    public price: number = 0;

    // #endregion Properties (2)

    // #region Constructors (1)

    constructor(data?: Partial<OrderScaleItemEntity>) {
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
