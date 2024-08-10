
export class DeliveryAreaFixedEntity {
    // #region Properties (5)

    public active: boolean = false;
    public deliveryFee: number = 0;
    public maxTime: number = 0;
    public minTime: number = 0;
    public minimumOrderValue: number = 0;

    // #endregion Properties (5)

    // #region Constructors (1)

    constructor(data?: Partial<DeliveryAreaFixedEntity>) {
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
