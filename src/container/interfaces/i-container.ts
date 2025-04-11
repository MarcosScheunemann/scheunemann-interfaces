import { IBase } from '../../general';

export interface IContainer extends IBase {
    // #region Properties (1)

    name: string;
    companyId: string;
    containerId: string;

    // #endregion Properties (1)
}
