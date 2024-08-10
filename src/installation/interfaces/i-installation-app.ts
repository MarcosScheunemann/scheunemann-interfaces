import { EAppMode } from '../../app';

export interface IInstallationApp {
    // #region Properties (5)

    iconUrl: string;
    id: string;
    mode: EAppMode;
    name: string;
    version: string;

    // #endregion Properties (5)
}
