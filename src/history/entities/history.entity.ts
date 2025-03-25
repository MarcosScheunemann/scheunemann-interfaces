import { IQuestion } from "../../question";
import { IHistory } from "../interfaces";

export class HistoryEntity implements IHistory {
  // #region Properties (12)
  public createdAt: Date = new Date();
  public updatedAt: Date = new Date();
  public id: string = '';
  public active: boolean = true;
  public question: IQuestion | null = null;

  constructor(data?: Partial<HistoryEntity>) {
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
