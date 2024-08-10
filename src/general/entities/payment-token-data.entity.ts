
export class PaymentTokenDataEntity {
    // #region Properties (7)

    public bin: string = '';
    public brand: string = '';
    public displayNumber: string = '';
    public firstDigits: string = '';
    public maskedNumber: string = '';
    public month: number = 0;
    public year: number = 0;

    // #endregion Properties (7)

    // #region Constructors (1)

    constructor(data?: Partial<PaymentTokenDataEntity>) {
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
