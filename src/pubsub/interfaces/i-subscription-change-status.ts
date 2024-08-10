import { ESubscriptionStatus } from '../../subscription-base';
import { EPubSubTopicType } from '../enums';

export interface IPubsubSubscriptionChangeStatus {
  // #region Properties (4)

  afterStatus: ESubscriptionStatus | null;
  beforeStatus: ESubscriptionStatus | null;
  subscriptionId: string;
  topicType: EPubSubTopicType | null;

  // #endregion Properties (4)
}
