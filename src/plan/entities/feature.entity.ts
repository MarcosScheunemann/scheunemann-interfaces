import { EPlanFeatureType } from "../enums";
import { IPlanFeature } from "../interfaces";

export class PlanFeatureEntity implements IPlanFeature {
  // #region Properties (10)

  public appId: string = "";
  public createdAt: Date = new Date();
  public featureType: EPlanFeatureType = EPlanFeatureType.FEATURE;
  public id: string = "";
  public index: number = 0;
  public name: string = "";
  public planId: string = "";
  public price: number = 0;
  public quantity: number = 0;
  public updatedAt: Date = new Date();

  // #endregion Properties (10)

  // #region Constructors (1)

  constructor(data?: Partial<PlanFeatureEntity>) {
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
