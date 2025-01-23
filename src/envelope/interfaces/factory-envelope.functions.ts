// #region Interfaces (1)

import { IEnvelope } from './i-envelope';

// Interface for envelope array structure

// #endregion Interfaces (1)

// #region Functions (3)

// Creates a basic envelope with a single item property
export function factoryEnvelope<T>(data: T | null): IEnvelope<T> {
  return {
    item: data, // Make item non-nullable for clarity (adjust based on your use case)
  };
}
