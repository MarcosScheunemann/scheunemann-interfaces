import { ILog } from '../interfaces/i-log';

export class LogsEntity implements ILog {
  // #region Properties (12)
  name: string = '';
  createdAt: Date= new Date();
  description: string = '';
  email: string = '';
  memberId: string = '';
  endPoint: string = '';
  id: string = '';

  constructor(data?: Partial<LogsEntity>) {
    if (data) {
      for (let key in data) {
        if (data.hasOwnProperty(key) && key in this) {
          (this as any)[key] = (data as any)[key];
        }
      }
    }
  }

}
