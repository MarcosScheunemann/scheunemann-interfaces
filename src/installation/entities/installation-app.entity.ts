import { EAppMode } from '../../app';
import { IInstallationApp } from '../interfaces/i-installation-app';

export class InstallationAppEntity implements IInstallationApp {
    // #region Properties (5)

    public iconUrl: string = '';
    public id: string = '';
    public mode: EAppMode = EAppMode.NATI_GO;
    public name: string = '';
    public version: string = '';

    // #endregion Properties (5)

    // #region Constructors (1)

    constructor(data?: Partial<InstallationAppEntity>) {
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
