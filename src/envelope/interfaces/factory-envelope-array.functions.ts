import { IEnvelopeArray } from './i-envelope-array';

// #region Functions (1)

// Interface for envelope array structure

// Creates an envelope containing an array of items, handling empty arrays
export function factoryEnvelopeArray<T>(items: T[] = []): IEnvelopeArray<T> {
  const data: IEnvelopeArray<T> = {
    offSet: 0,
    limit: 0,
    itemsTotal: items.length,
    total: items.length,
    items,
  };
  return data; // Consider returning a frozen copy for immutability
}

// #endregion Functions (1)
