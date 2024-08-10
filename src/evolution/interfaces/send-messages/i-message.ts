import { IEvolutionMessageKeyResponse } from './i-message-key';

export interface IEvolutionMessageResponse {
  // #region Properties (4)

  key: IEvolutionMessageKeyResponse | null;
  message: any;
  messageTimestamp: string | null;
  status: string | null;

  // #endregion Properties (4)
}
