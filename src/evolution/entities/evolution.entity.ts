import { EEvolutionEvent } from '../enums';
import { IEvolution, IEvolutionChatWoot } from '../interfaces';
import { EvolutionHashEntity } from './hash.entity';
import { EvolutionInstanceEntity } from './instance.entity';
import { EvolutionQrcodeEntity } from './qrcode.entity';

export class EvolutionEntity implements IEvolution {
  // #region Properties (6)

  public chatwoot: IEvolutionChatWoot | null = null;
  public events: EEvolutionEvent[] = [];
  public hash: EvolutionHashEntity = new EvolutionHashEntity();
  public instance: EvolutionInstanceEntity = new EvolutionInstanceEntity();
  public qrcode: EvolutionQrcodeEntity = new EvolutionQrcodeEntity();
  public webhook: string = '';
  constructor(data?: Partial<EvolutionEntity>) {
    if (data) {
      for (let key in data) {
        if (data.hasOwnProperty(key) && key in this) {
          (this as any)[key] = (data as any)[key];
        }
      }
    }
  }
  // #endregion Properties (6)
}
