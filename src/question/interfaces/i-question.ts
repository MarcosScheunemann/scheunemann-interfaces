export interface IQuestion {
  active: boolean;
  createdAt: Date;
  id: string;
  name: string;
  description: string;
  index: number;
  value: string;
  questionId: string | null;
  level: number | null;
  tags: string[]
}
