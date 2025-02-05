import { EIntervalType } from '../../general/enums';
import { EPlanIdentifier } from '../enums';
import { IPlanFeature } from './i-feature';

export interface IPlan {
  active: boolean;
  createdAt: Date;
  name: string;
  features: IPlanFeature[];
  id: string;
  identifier: EPlanIdentifier;
  index: number;
  interval: number;
  intervalType: EIntervalType;
  tags: string[];
  trialDays: number;
  price: number;
  updatedAt: Date;
  isRecommended: boolean;
}
