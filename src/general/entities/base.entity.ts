// src/models/base.entity.ts

export class BaseEntity {
    // #region Properties (6)

    public active: boolean = true;
    public companyId: string = '';
    public containerId: string = '';
    public createdAt: Date = new Date();
    public id: string = '';
    public updatedAt: Date = new Date();

    // #endregion Properties (6)

    // #region Constructors (1)

    constructor(data?: Partial<BaseEntity>) {
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
