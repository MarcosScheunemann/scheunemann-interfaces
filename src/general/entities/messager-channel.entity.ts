export class MessagerChannelEntity {
    // #region Properties (3)

    public channelId: string = '';
    public id: string = '';
    public type: string = '';

    // #endregion Properties (3)

    // #region Constructors (1)

    constructor(data?: Partial<MessagerChannelEntity>) {
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
