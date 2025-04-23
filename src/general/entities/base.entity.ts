// src/models/base.entity.ts

export class BaseEntity {
  // #region Properties (6)

  public active: boolean = true;
  public createdAt: Date = new Date();
  public updatedAt: Date = new Date();
  public id: string = '';

  // #endregion Properties (6)

  // #region Constructors (1)

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
