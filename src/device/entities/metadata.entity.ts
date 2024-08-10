import { NatiGoEntity } from '../../app/entities/natigo.entity';
import { IDeviceMetadata } from '../interfaces/i-metadata';

export class MetadataEntity implements IDeviceMetadata {
    // #region Properties (1)

    public natigo: NatiGoEntity = new NatiGoEntity();

    // #endregion Properties (1)

    // #region Constructors (1)

    constructor(data?: Partial<MetadataEntity>) {
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
