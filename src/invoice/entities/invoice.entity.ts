import { EPaymentType, PaymentProviderEntity } from '../../general';
import { IOrder } from '../../order';
import { EInvoiceStatus } from '../enums';
import { IInvoice } from '../interfaces';
import { InvoiceBankSlipEntity } from './invoice-bank-slip.entity';
import { InvoiceCreditCardEntity } from './invoice-credit-card.entity';
import { InvoiceItemEntity } from './invoice-item.entity';
import { InvoiceLogEntity } from './invoice-log.entity';
import { InvoicePayerEntity } from './invoice-payer.entity';
import { InvoicePixEntity } from './invoice-pix.entity';

export class InvoiceEntity implements IInvoice {
  // #region Properties (43)

  public addition: number = 0;
  public bankSlip: InvoiceBankSlipEntity | null = null;
  public bankSlipExtraDue: number = 3;
  public ccEmails: string[] = [];
  public companyId: string = '';
  public containerId: string = '';
  public createdAt: Date = new Date();
  public creditCard: InvoiceCreditCardEntity | null = null;
  public currency: string = 'BRL';
  public customerId: string | null = null;
  public discount: number = 0;
  public dueDateAt: Date = new Date(Date.now() + 3 * 24 * 60 * 60 * 1000);
  public email: string = '';
  public ensureDueOnWorkday: boolean = true;
  public externalInvoiceId: string = '';
  public externalInvoiceUrl: string = '';
  public id: string = '';
  public items: InvoiceItemEntity[] = [];
  public logs: InvoiceLogEntity[] = [];
  public notes: string = '';
  public notificationUrl: string = '';
  public orderId: string = '';
  public orders: IOrder[] | null = [];
  public paidAt: Date | null = null;
  public partnerId: string = '';
  public password: string | null = null;
  public payer: InvoicePayerEntity = new InvoicePayerEntity();
  public paymentMethod: EPaymentType = EPaymentType.NONE;
  public paymentProvider: PaymentProviderEntity | null = null;
  public phoneNumbersNotification: string[] = [];
  public pix: InvoicePixEntity | null = null;
  public returnExpiredUrl: string = '';
  public returnUrl: string = '';
  public sandbox: boolean = false;
  public status: EInvoiceStatus = EInvoiceStatus.DRAFT;
  public subTotal: number = 0;
  public subscriptionId: string = '';
  public totalAmount: number = 0;
  public totalFee: number = 0;
  public totalOverPaid: number = 0;
  public totalPaid: number = 0;
  public totalRefunded: number = 0;
  public updatedAt: Date = new Date();

  // #endregion Properties (43)

  // #region Constructors (1)

  constructor(data?: Partial<InvoiceEntity>) {
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
