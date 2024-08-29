import { EIntervalType } from '../../general/enums';
import { EPlanIdentifier } from '../enums/plans-identifier.enum';
import { IPlan } from '../interfaces';
import { PlanFeatureEntity } from './feature.entity';

export class PlanEntity implements IPlan {
  // #region Properties (12)

  public createdAt: Date = new Date();
  public features: PlanFeatureEntity[] = [];
  public id: string = '';
  public identifier: EPlanIdentifier = EPlanIdentifier.DEFAULT;
  public index: number = 0;
  public interval: number = 12;
  public intervalType: EIntervalType = EIntervalType.MONTHS;
  public name: string = '';
  public price: number = 0;
  public tags: string[] = [];
  public trialDays: number = 0;
  public updatedAt: Date = new Date();

  // #endregion Properties (12)

  // #region Constructors (1)

  constructor(data?: Partial<PlanEntity>) {
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
