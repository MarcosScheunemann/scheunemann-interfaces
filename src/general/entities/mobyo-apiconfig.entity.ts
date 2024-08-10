
export class MobyoApiConfigEntity {
    // #region Properties (6)

    public hasIntegration: boolean = false;
    public hasPrint: boolean = false;
    public integrationUrl: string = '';
    public printCols: number = 40;
    public printInterface: string = '';
    public printType: string = '';

    // #endregion Properties (6)

    // #region Constructors (1)

    constructor(data?: Partial<MobyoApiConfigEntity>) {
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
