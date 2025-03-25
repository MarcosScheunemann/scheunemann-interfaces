export interface IClause {
  createdAt: Date;
  updatedAt: Date;
  active: boolean;
  id: string;
  questionIds: string[];
  description: string;
}

