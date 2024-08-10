import { IuguAutoAdvanceEnum } from '../enums';
import { IIuguAccount, IIuguAccountConfiguration, IIuguConfigEarlyPaymentDiscount, IIuguMarketplaceSplit } from '../interfaces';
import { AccountInformationsEntity } from './account-informations.entity';
import { LastVerificationRequestDataEntity } from './account-last-verification-request-data.entity';

export class IuguAccountEntity implements IIuguAccount {
    // #region Properties (54)

    public autoAdvance: boolean = false;
    public autoAdvanceOption: number = 0;
    public autoAdvanceType: IuguAutoAdvanceEnum = IuguAutoAdvanceEnum.DAILY;
    public autoWithdraw: boolean = false;
    public balance: string = '';
    public balanceAvailableForWithdraw: string = '';
    public balanceInProtest: string = '';
    canReceive?: boolean = false;
    public changePlanType: number = 0;
    public commissionBalance: string = '';
    public configuration: IIuguAccountConfiguration | null = null;
    public createdAt: Date = new Date();
    public creditCardVerified: boolean = false;
    public customLogoSmallUrl: string = '';
    public customLogoUrl: string = '';
    public defaultReturnUrl: string = '';
    public disableEmails: boolean = false;
    public disabledWithdraw: boolean = false;
    public earlyPaymentDiscount: boolean = false;
    public earlyPaymentDiscountDays: number = 0;
    public earlyPaymentDiscountPercent: number = 0;
    public earlyPaymentDiscounts: IIuguConfigEarlyPaymentDiscount[] = [];
    public fines: boolean = false;
    hasBankAddress?: boolean = false;
    public id: string = '';
    public informations: AccountInformationsEntity[] = [];
    isVerified?: boolean = false;
    public lastVerificationRequestData: LastVerificationRequestDataEntity = new LastVerificationRequestDataEntity();
    public lastVerificationRequestFeedback: string = '';
    public lastVerificationRequestStatus: 'accepted' | string = 'accepted';
    public lastWithdraw: Date = new Date();
    public latePaymentFine: number = 0;
    public marketplace: boolean = false;
    public name: string = '';
    public oldAdvancement: boolean = false;
    public payableBalance: string = '';
    public paymentEmailNotification: boolean = false;
    public paymentEmailNotificationReceiver: string = '';
    public perDayInterest: boolean = false;
    public permissions: string[] = [];
    public protectedBalance: string = '';
    public receivableBalance: string = '';
    public replyTo: string = '';
    public splits: IIuguMarketplaceSplit[] = [];
    public subscriptionsBillingDays: number = 0;
    public subscriptionsTrialPeriod: number = 0;
    public taxesPaidLastMonth: string = '';
    public taxesPaidThisMonth: string = '';
    public totalActiveSubscriptions: number = 0;
    public totalSubscriptions: number = 0;
    public updatedAt: Date = new Date();
    public volumeLastMonth: string = '';
    public volumeThisMonth: string = '';
    public webappOnTestMode: boolean = false;

    // #endregion Properties (54)

    // #region Constructors (1)

    constructor(data?: Partial<IuguAccountEntity>) {
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
