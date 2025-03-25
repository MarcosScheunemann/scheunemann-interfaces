import { IQuestion } from '../../question';

export interface IHistory {
  // #region Properties (8)
  createdAt: Date;
  updatedAt: Date;
  active: boolean;
  id: string;
  question: IQuestion | null;
}
