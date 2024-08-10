export class OrderAdditionalFeeEntity {
    // #region Properties (2)

    public type: string = '';
    public value: number = 0;

    // #endregion Properties (2)

    // #region Constructors (1)

    constructor(data?: Partial<OrderAdditionalFeeEntity>) {
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
