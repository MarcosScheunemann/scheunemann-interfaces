import { IIuguPlanFeature } from './i-plan-feature';
import { IIuguPlanPrice } from './i-plan-price';

export interface IIuguPlan {
    // #region Properties (9)

    createdAt: Date;
    features: IIuguPlanFeature[];
    id: string;
    identifier: string;
    interval: number;
    intervalType: string;
    name: string;
    prices: IIuguPlanPrice[];
    updatedAt: Date;

    // #endregion Properties (9)
}
