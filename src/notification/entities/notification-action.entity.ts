import { NotificationActionTypeEnum } from '../enums';
import { INotificationAction } from '../interfaces/i-notification-action';

export class NotificationActionEntity implements INotificationAction {
    // #region Properties (4)

    icon?: string = '';
    public label: string = '';
    public type: NotificationActionTypeEnum = NotificationActionTypeEnum.URL;
    public value: string = '';

    // #endregion Properties (4)

    // #region Constructors (1)

    constructor(data?: Partial<NotificationActionEntity>) {
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
