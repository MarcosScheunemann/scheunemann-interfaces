import { NotificationCategoryEnum, NotificationPriorityEnum, NotificationStatusEnum } from '../enums';
import { INotificationAction } from './i-notification-action';

/**
 * @deprecated
 */
export interface INotification {
  // #region Properties (13)

  action: INotificationAction;
  category: NotificationCategoryEnum;
  createdAt: Date;
  data: string;
  description: string;
  expirationTime: number;
  id: string;
  imageUrl: string;
  priority: NotificationPriorityEnum;
  sound: boolean;
  status: NotificationStatusEnum;
  title: string;
  topicName: string;

  // #endregion Properties (13)
}
