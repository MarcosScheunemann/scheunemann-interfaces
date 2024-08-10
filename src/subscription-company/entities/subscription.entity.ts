import { FeatureEntity } from '../../feature';
import { SubscriptionBaseEntity } from '../../subscription-base/entities/subscription-base.entity';
import { ISubscriptionCompany } from '../interfaces/i-subscription';
import { SubscriptionCompanyProfileEntity } from './subscription-profile.entity';

export class SubscriptionCompanyEntity extends SubscriptionBaseEntity implements ISubscriptionCompany {
  // #region Properties (9)

  public features: FeatureEntity[] = [];
  public partnerId: string | null = '';
  public planId: string = '';
  public planName: string = '';
  public profile: SubscriptionCompanyProfileEntity = new SubscriptionCompanyProfileEntity();

  // #endregion Properties (9)

  // #region Constructors (1)

  constructor(data?: Partial<SubscriptionCompanyEntity>) {
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
