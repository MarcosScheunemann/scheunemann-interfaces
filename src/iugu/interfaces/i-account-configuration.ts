import { IIuguAccountConfigurationBankSlip } from './i-account-configuration-bank-slip';
import { IIuguAccountConfigurationCreaditCard } from './i-account-configuration-creadit-card';
import { IIuguAccountConfigurationPix } from './i-account-configuration-pix';
import { IIuguConfigEarlyPaymentDiscount } from './i-config-early-payment-discounts';

export interface IIuguAccountConfiguration {
    // #region Properties (15)

    autoAdvance: boolean;
    autoAdvanceOption?: string;
    autoAdvanceType?: string;
    autoWithdraw: boolean;
    bankSlip: IIuguAccountConfigurationBankSlip;
    creditCard: IIuguAccountConfigurationCreaditCard;
    disabledWithdraw: boolean;
    earlyPaymentDiscount: boolean;
    earlyPaymentDiscounts?: IIuguConfigEarlyPaymentDiscount[];
    fines: boolean;
    latePaymentFine: number;
    paymentEmailNotification: boolean;
    paymentEmailNotificationReceiver?: string;
    perDayInterest: number;
    pix: IIuguAccountConfigurationPix;

    // #endregion Properties (15)
}
