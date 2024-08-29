import { EPlanFeatureType } from '../enums';

export interface IPlanFeature {
  planId: string;
  appId: string;
  createdAt: Date;
  featureType: EPlanFeatureType;
  id: string;
  index: number;
  name: string;
  price: number;
  quantity: number;
  updatedAt: Date;
  credit: number;
}
