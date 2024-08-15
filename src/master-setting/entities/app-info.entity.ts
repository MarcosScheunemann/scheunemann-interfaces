export class AppInfo {
    // #region Properties (9)

    public appId: string = '';
    public secrets: string = '';
    public apikey: string | null = null;

    // #endregion Properties (9)

    // #region Constructors (1)

    constructor(data: any) {
        this.appId = data?.appId || '';
        this.secrets = data?.secrets || '';
        this.apikey = data?.apikey || null;
    }

    // #endregion Constructors (1)
}
