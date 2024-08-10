import { EOs } from '../../general/enums/os.enum';
import { IDevice } from '../interfaces/i-device';

export class DeviceEntity implements IDevice {
  // #region Properties (14)

  public active: boolean = false;
  public companyId: string = '';
  public containerId: string = '';
  public createdAt: Date = new Date();
  public deviceId: string = '';
  public os: EOs = EOs.UNKNOWN;
  public installedApps = [];
  public osVersion: string = '';
  public id: string = '';
  public key: string = '';
  public lastAccess: Date = new Date();
  public name: string = '';
  public tags: string[] = [];
  public updatedAt: Date = new Date();

  // #endregion Properties (14)

  // #region Constructors (1)

  constructor(data?: Partial<DeviceEntity>) {
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
