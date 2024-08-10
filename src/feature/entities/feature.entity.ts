import { EAppMode } from '../../app';
import { IFeature } from '../interfaces';

export class FeatureEntity implements IFeature {
  // #region Properties (11)

  public appId: string = '';
  public appMode: EAppMode | null = null;
  public companyId: string = '';
  public containerId: string = '';
  public createdAt: Date = new Date();
  public deviceId: string = '';
  public id: string = '';
  public installationId: string = '';
  public name: string = '';
  public planId: string | null = null;
  public subscriptionId: string = '';

  // #endregion Properties (11)

  // #region Constructors (1)

  constructor(data?: Partial<FeatureEntity>) {
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
