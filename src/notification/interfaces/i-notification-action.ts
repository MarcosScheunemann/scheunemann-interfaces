import { NotificationActionTypeEnum } from '../enums';

export interface INotificationAction {
    // #region Properties (4)

    icon?: string;
    label: string;
    type: NotificationActionTypeEnum;
    value: string;

    // #endregion Properties (4)
}
