export interface IEnvelopeArray<T> {
  actives?: number;
  offSet: number;
  limit: number;
  itemsTotal: number;
  total: number;
  items: T[];
}
