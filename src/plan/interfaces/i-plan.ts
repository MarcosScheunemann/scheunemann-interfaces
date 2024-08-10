import { EIntervalType } from '../../general/enums';
import { EPlanIdentifier } from '../enums';
import { IPlanFeature } from './i-feature';

export interface IPlan {
  // #region Properties (10)

  createdAt: Date;
  features: IPlanFeature[];
  id: string;
  identifier: EPlanIdentifier;
  index: number;
  interval: number;
  intervalType: EIntervalType;
  tags: string[];
  name: string;
  trialDays: number;
  // Permite mais de um plano para o mesmo app ou apenas um plano para o app
  // Criar campo para definir a quantidade possível de planos por app
  // Se for 1, o app terá apenas um plano, se for 0, o app terá mais de um plano
  // Se for 0, criar campo para definir o plano padrão

  price: number;
  updatedAt: Date;

  // #endregion Properties (10)
}
