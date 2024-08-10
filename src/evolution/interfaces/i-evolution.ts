import { EEvolutionEvent } from '../enums/events.enum';
import { IEvolutionChatWoot } from './i-chatwoot';
import { IEvolutionHash } from './i-hash';
import { IEvolutionInstance } from './i-instance';
import { IEvolutionQrcode } from './i-qrcode';

export interface IEvolution {
  instance: IEvolutionInstance;
  hash: IEvolutionHash;
  webhook: string;
  events: EEvolutionEvent[];
  qrcode: IEvolutionQrcode;
  chatwoot: IEvolutionChatWoot | null;

  // #endregion Properties (6)
}
