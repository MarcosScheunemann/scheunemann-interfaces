
export class AppInfoEntity {
    // #region Properties (3)

    public appId: string = '';
    public name: string = '';
    public version: string = '';

    // #endregion Properties (3)

    // #region Constructors (1)

    constructor(data?: Partial<AppInfoEntity>) {
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
