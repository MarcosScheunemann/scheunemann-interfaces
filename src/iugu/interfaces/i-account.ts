import { IuguAutoAdvanceEnum } from '../enums/iugu-auto-advance.enum';
import { IIuguAccountConfiguration } from './i-account-configuration';
import { IIuguLastVerificationRequestData } from './i-account-info-last-ver-req-data';
import { IIuguInformations } from './i-account-informations';
import { IIuguMarketplaceSplit } from './i-account-marketplace-split';
import { IIuguConfigEarlyPaymentDiscount } from './i-config-early-payment-discounts';

export interface IIuguAccount {
    // #region Properties (54)

    /**
     * @description
     * Antecipação Automática.
     * Só pode ser atribuído caso a conta tenha a funcionalidade de Novo Adiantamento habilitado.
     */
    autoAdvance: boolean;
    autoAdvanceOption: number;
    /**
     * @description
     * Obrigatório caso autoAdvance seja true e autoAdvanceType diferente de 'daily'.
     * Em caso de autoAdvanceType = weekly, recebe valores de 0 a 6
     * (Número correspondente ao dia da semana que a antecipação será realizada,
     * 0 para domingo, 1 para segunda e assim por diante).
     *
     * Em caso de autoAdvanceType = monthly, recebe valores de 1 a 28
     * (Número correspondente ao dia do mês que a antecipação será realizada).
     * Em caso de autoAdvanceType = daysAfterPayment, recebe valores de 1 a 30
     * (Número de dias após o pagamento em que a antecipação será realizada)
     */
    autoAdvanceType: IuguAutoAdvanceEnum;
    autoWithdraw: boolean;
    balance: string;
    balanceAvailableForWithdraw: string;
    balanceInProtest: string;
    canReceive?: boolean;
    changePlanType: number;
    commissionBalance: string;
    configuration: IIuguAccountConfiguration | null;
    createdAt: Date;
    creditCardVerified: boolean;
    customLogoSmallUrl: string;
    customLogoUrl: string;
    // Saque automático
    defaultReturnUrl: string;
    disableEmails: boolean;
    disabledWithdraw: boolean;
    earlyPaymentDiscount: boolean;
    earlyPaymentDiscountDays: number;
    earlyPaymentDiscountPercent: number;
    earlyPaymentDiscounts: IIuguConfigEarlyPaymentDiscount[];
    fines: boolean;
    hasBankAddress?: boolean;
    id: string;
    informations: IIuguInformations[];
    isVerified?: boolean;
    lastVerificationRequestData: IIuguLastVerificationRequestData;
    lastVerificationRequestFeedback: string;
    lastVerificationRequestStatus: 'accepted' | string;
    lastWithdraw: Date;
    // Multas
    latePaymentFine: number;
    marketplace: boolean;
    name: string;
    // Juros de mora
    oldAdvancement: boolean;
    payableBalance: string;
    paymentEmailNotification: boolean;
    paymentEmailNotificationReceiver: string;
    // Valor da multa em % (Ex: 2)
    perDayInterest: boolean;
    permissions: string[];
    protectedBalance: string;
    receivableBalance: string;
    replyTo: string;
    splits: IIuguMarketplaceSplit[];
    subscriptionsBillingDays: number;
    subscriptionsTrialPeriod: number;
    taxesPaidLastMonth: string;
    taxesPaidThisMonth: string;
    totalActiveSubscriptions: number;
    totalSubscriptions: number;
    updatedAt: Date;
    volumeLastMonth: string;
    volumeThisMonth: string;
    webappOnTestMode: boolean;

    // #endregion Properties (54)
}
