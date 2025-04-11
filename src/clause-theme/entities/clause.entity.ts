import { IClause } from '../interfaces';

export class ClauseEntity implements IClause {
  public createdAt: Date = new Date();
  public updatedAt: Date = new Date();
  public active: boolean = true;
  public id: string = '';
  public questionIds: string[] = [];
  public description: string = '';

  constructor(data?: Partial<ClauseEntity>) {
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

