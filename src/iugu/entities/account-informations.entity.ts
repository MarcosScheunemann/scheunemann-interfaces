import { IIuguInformations } from '../interfaces';

export class AccountInformationsEntity implements IIuguInformations {
    // #region Properties (2)

    public key: string = '';
    public value: string = '';

    // #endregion Properties (2)

    // #region Constructors (1)

    constructor(data?: Partial<AccountInformationsEntity>) {
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
