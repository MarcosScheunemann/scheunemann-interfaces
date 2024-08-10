export class IuguPaymentTokenDataEntity {
    // #region Properties (9)

    public bin: string = '';
    public brand: string = '';
    public displayNumber: string = '';
    public firstDigits: string = '';
    public holderName: string = '';
    public lastDigits: string = '';
    public maskedNumber: string = '';
    public month: number = 0;
    public year: number = 2035;

    // #endregion Properties (9)

    // #region Constructors (1)

    constructor(data?: Partial<IuguPaymentTokenDataEntity>) {
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
