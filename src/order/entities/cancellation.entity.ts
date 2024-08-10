
export class OrderCancellationEntity {
    // #region Properties (3)

    public cancellationBy: string = '';
    public cancellationCode: string = '';
    public reason: string = '';

    // #endregion Properties (3)

    // #region Constructors (1)

    constructor(data?: Partial<OrderCancellationEntity>) {
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
