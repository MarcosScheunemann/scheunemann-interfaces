import { IFcmDataRequestItems } from './i-fcm-data-request-items';

export interface IFcmNotify {
  // #region Properties (5)
  collapseKey?: any;
  data: IFcmDataRequestItems;
  from?: string;
  messageId?: string;
  notification?: {
    body?: string;
    title?: string;
  };

  // #endregion Properties (5)
}
