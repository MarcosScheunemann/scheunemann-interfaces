export interface IQuestion {
  active: boolean;
  createdAt: Date;
  updatedAt:Date
  id: string;
  name: string;
  description: string;
  index: number;
  value: string;
  questionIds: string[] | null;
  level: number | null;
  tags: string[]
}
