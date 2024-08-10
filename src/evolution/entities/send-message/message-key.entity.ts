import { IEvolutionMessageKeyResponse } from '../../interfaces';

export class EvolutionMessageKeyResponseEntity implements IEvolutionMessageKeyResponse {
  // #region Properties (3)

  public fromMe: boolean = false;
  public id: string = '';
  public remoteJid: string = '';

  // #endregion Properties (3)
}
