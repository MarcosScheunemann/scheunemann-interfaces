import { IIuguSubscriptionCustomVariable } from './i-subscription-custom-variable';
import { IIuguSubscriptionFeatures } from './i-subscription-features';
import { IIuguSubscriptionLog } from './i-subscription-log';
import { IIuguSubscriptionRecentInvoice } from './i-subscription-recent-invoice';
import { IIuguSubscriptionSubitem } from './i-subscription-subitem';

export interface IIuguSubscription {
    // #region Properties (32)

    active: boolean;
    createdAt: Date;
    credits: number;
    creditsBased: boolean;
    creditsCycle: number;
    creditsMin: number;
    currency: string;
    customVariables: IIuguSubscriptionCustomVariable[];
    customerEmail: string;
    customerId: string;
    customerName: string;
    customerRef: string;
    cycledAt: Date;
    cyclesCount: number;
    expiresAt: Date;
    features: IIuguSubscriptionFeatures;
    id: string;
    ignoreDueEmail: any;
    inTrial: string;
    logs: IIuguSubscriptionLog[];
    maxCycles: number;
    payableWith: string;
    planIdentifier: string;
    planName: string;
    planRef: string;
    priceCents: number;
    recentInvoices: IIuguSubscriptionRecentInvoice[];
    subitems: IIuguSubscriptionSubitem[];
    suspendOnInvoiceExpired: boolean;
    suspended: boolean;
    twoStep: boolean;
    updatedAt: Date;

    // #endregion Properties (32)
}
