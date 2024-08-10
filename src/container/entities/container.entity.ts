import { BaseEntity } from '../../general';
import { IContainer } from '../interfaces';

export class ContainerEntity extends BaseEntity implements IContainer {
    // #region Properties (1)

    public name: string = '';

    // #endregion Properties (1)

    // #region Constructors (1)

    constructor(data?: Partial<ContainerEntity>) {
        super(data);
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
