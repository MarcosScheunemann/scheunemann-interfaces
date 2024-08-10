import { IEvolutionMessageResponse } from '../../interfaces';
import { EvolutionMessageKeyResponseEntity } from './message-key.entity';

export class EvolutionMessageResponseEntity implements IEvolutionMessageResponse {
  // #region Properties (4)

  public key: EvolutionMessageKeyResponseEntity | null = null;
  public message: any = null;
  public messageTimestamp: string | null = null;
  public status: string | null = null;

  // #endregion Properties (4)
}
