import { IBase } from "../interfaces";

export class BaseEntity implements IBase{
  // #region Properties (6)

  public active: boolean = true;
  public createdAt: Date = new Date();
  public updatedAt: Date = new Date();
  public id: string = '';

  constructor(data?: Partial<BaseEntity>) {
    if (data) {
      for (let key in data) {
        if (data.hasOwnProperty(key) && key in this) {
          (this as any)[key] = (data as any)[key];
        }
      }
    }
  }

}
