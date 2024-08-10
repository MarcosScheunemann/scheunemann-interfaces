/* eslint-disable id-blacklist */
import { IIuguInvoice } from '../interfaces/i-invoice';
import { IuguInvoiceBankSlipEntity } from './invoice-bankslip.entity';

export class IuguInvoiceEntity implements IIuguInvoice {
  // #region Properties (114)

  public accountId: string = '';
  public accountName: string = '';
  public advanceFee: any;
  public advanceFeeCents: any;
  public authorizedAt: any;
  public authorizedAtIso: any;
  public bankAccountBranch: string = '';
  public bankAccountNumber: string = '';
  public bankSlip: IuguInvoiceBankSlipEntity | null = null;
  public bankSlipExtraDue: number = 0;
  public canceledAt: any;
  public canceledAtIso: any;
  public ccEmails: any;
  public chargebackAt: any;
  public chargebackAtIso: any;
  public commission: string = '';
  public commissionCents: any;
  public createdAt: string = '';
  public createdAtIso: string = '';
  public creditCardBin: any;
  public creditCardBrand: any;
  public creditCardCapturedAt: any;
  public creditCardLast4: any;
  public creditCardTid: any;
  public creditCardTransaction: string = '';
  public currency: string = '';
  public customVariables: any[] = [];
  public customerId: any;
  public customerName: any;
  public customerRef: any;
  public discount: any;
  public discountCents: number = 0;
  public doublePaymentId: any;
  public dueDate: string = '';
  public duplicatedInvoiceId: any;
  public earlyPaymentDiscount: boolean = false;
  public earlyPaymentDiscounts: any[] = [];
  public email: string = '';
  public estimatedAdvanceFee: any;
  public expiredAt: any;
  public expiredAtIso: any;
  public externalPaymentDescription: any;
  public externalPaymentId: any;
  public externalReference: any;
  public financialReturnDate: any;
  public financialReturnDates: any;
  public finesOnOccurrenceDay: string = '';
  public finesOnOccurrenceDayCents: number = 0;
  public id: string = '';
  public ignoreCanceledEmail: boolean = false;
  public ignoreDueEmail: boolean = false;
  public installments: any;
  public interest: any;
  public items: any[] = [];
  public itemsTotalCents: number = 0;
  public latePaymentFine: any;
  public latePaymentFineCents: number = 0;
  public logs: any[] = [];
  public maxInstallmentsValue: any;
  public notificationUrl: string = '';
  public occurrenceDate: any;
  public orderId: any;
  public originalPaymentId: any;
  public overpaidCents: any;
  public paid: string = '';
  public paidAt: any;
  public paidCents: any;
  public payableWith: string = '';
  public payerAddressCity: string = '';
  public payerAddressComplement: any;
  public payerAddressCountry: string = '';
  public payerAddressDistrict: string = '';
  public payerAddressNumber: string = '';
  public payerAddressState: string = '';
  public payerAddressStreet: string = '';
  public payerAddressZipCode: string = '';
  public payerCpfCnpj: string = '';
  public payerEmail: any;
  public payerName: string = '';
  public payerPhone: string = '';
  public payerPhonePrefix: string = '';
  public paymentMethod: any;
  public perDayInterest: boolean = false;
  public perDayInterestCents: number = 0;
  public perDayInterestValue: any;
  public pix: any = {};
  public protestedAt: any;
  public protestedAtIso: any;
  public refundable: any;
  public refundedAt: any;
  public refundedAtIso: any;
  public refundedCents: number = 0;
  public remainingCapturedCents: number = 0;
  public returnUrl: string = '';
  public secureId: string = '';
  public secureUrl: string = '';
  public splitId: any;
  public splitRules: any;
  public status: string = '';
  public taxCents: number = 0;
  public taxesPaid: string = '';
  public taxesPaidCents: any;
  public total: string = '';
  public totalCents: number = 0;
  public totalOnOccurrenceDay: string = '';
  public totalOnOccurrenceDayCents: number = 0;
  public totalOverpaid: string = '';
  public totalPaid: string = '';
  public totalPaidCents: number = 0;
  public totalRefunded: string = '';
  public transactionNumber: number = 0;
  public updatedAt: string = '';
  public userId: any = '';
  public variables: any[] = [];

  // #endregion Properties (114)

  // #region Constructors (1)

  constructor(data?: Partial<IuguInvoiceEntity>) {
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
