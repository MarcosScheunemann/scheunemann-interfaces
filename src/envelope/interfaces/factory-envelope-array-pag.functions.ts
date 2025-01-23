import { IEnvelopeArray } from './i-envelope-array';

// #region Functions (1)

// Creates an envelope containing an array of items with pagination support
export function factoryEnvelopeArrayPagination<T>(items: T[], offSet: number, limit: number, total?: number): IEnvelopeArray<T> {
  const data: IEnvelopeArray<T> = {
    offSet,
    limit,
    itemsTotal: items.length,
    total: total || items.length,
    items,
  };
  return data; // Consider returning a frozen copy for immutability
}

// #endregion Functions (1)
