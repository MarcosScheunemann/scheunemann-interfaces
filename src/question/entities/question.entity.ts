import { IQuestion } from '../interfaces/i-question';

export class QuestionEntity implements IQuestion {

  public active: boolean = true;
  public createdAt: Date = new Date();
  public description: string = '';
  public id: string = '';
  public name: string = '';
  public value: string = '';
  public index: number = 0;
  public level: number | null = null;
  public questionId: string | null = null;
  public tags: string[] = [];

  constructor(data?: Partial<QuestionEntity>) {
    if (data) {
      for (let key in data) {
        if (data.hasOwnProperty(key) && key in this) {
          (this as any)[key] = (data as any)[key];
        }
      }
    }
  }

}
