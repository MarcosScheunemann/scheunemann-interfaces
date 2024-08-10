import { NotificationCategoryEnum, NotificationPriorityEnum, NotificationStatusEnum } from '../enums';
import { INotification } from '../interfaces';
import { NotificationActionEntity } from './notification-action.entity';

export class NotificationEntity implements INotification {
  // #region Properties (13)

  public action: NotificationActionEntity = new NotificationActionEntity();
  public category: NotificationCategoryEnum = NotificationCategoryEnum.ALERT;
  public createdAt: Date = new Date();
  public data: string = '';
  public description: string = '';
  public expirationTime: number = 3600;
  public id: string = '';
  public imageUrl: string = '';
  public priority: NotificationPriorityEnum = NotificationPriorityEnum.HIGH;
  public sound: boolean = true;
  public status: NotificationStatusEnum = NotificationStatusEnum.DELIVERED;
  public title: string = '';
  public topicName: string = '';

  // #endregion Properties (13)

  // #region Constructors (1)

  constructor(data?: Partial<NotificationEntity>) {
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
