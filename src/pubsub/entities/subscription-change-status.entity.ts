import { ESubscriptionStatus } from '../../subscription-base';
import { EPubSubTopicType } from '../enums';
import { IPubsubSubscriptionChangeStatus } from '../interfaces';

export class PubsubSubscriptionChangeStatusEntity implements IPubsubSubscriptionChangeStatus {
  // #region Properties (4)

  public afterStatus: ESubscriptionStatus | null = null;
  public beforeStatus: ESubscriptionStatus | null = null;
  public subscriptionId: string = '';
  public topicType: EPubSubTopicType | null = null;

  // #endregion Properties (4)

  // #region Constructors (1)

  constructor(data?: Partial<PubsubSubscriptionChangeStatusEntity>) {
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
