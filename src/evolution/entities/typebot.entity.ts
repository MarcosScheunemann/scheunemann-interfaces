import { IEvolutionTypebot } from '../interfaces/i-typebot';

export class EvolutionTypeBotEntity implements IEvolutionTypebot {
  // #region Properties (2)

  public instanceName: string = '';
  public typebot: typeBot = new typeBot();

  // #endregion Properties (2)

  // #region Constructors (1)

  constructor(data?: Partial<EvolutionTypeBotEntity>) {
    if (data) {
      for (let key in data) {
        if (data.hasOwnProperty(key) && key in this) {
          (this as any)[key] = (data as any)[key];
        }
      }
    }
  }
  // #endregion Constructors (1)
}
class typeBot {
  enabled: boolean = true;
  url: string = '';
  typebot: string = '';
  expire: number = 20;
  keywordFinish: string = '#SAIR';
  delayMessage: number = 1000;
  unknownMessage: string = 'Mensagem não reconhecida';
  listeningFromMe: boolean = false;
}
