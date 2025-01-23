import { EPaymentType, PaymentProviderEntity } from '../../general';
import { CustomerInfoEntity, ICustomerInfo } from '../../master-setting';
import { IOrder } from '../../order';
import { EInvoiceStatus } from '../enums';
import { IInvoice, IInvoiceBankSlip, IInvoiceCreditCard, IInvoiceItem, IInvoiceLog, IInvoicePix } from '../interfaces';
import { InvoiceBankSlipEntity } from './invoice-bank-slip.entity';
import { InvoiceCreditCardEntity } from './invoice-credit-card.entity';
import { InvoiceItemEntity } from './invoice-item.entity';
import { InvoiceLogEntity } from './invoice-log.entity';
import { InvoicePayerEntity } from './invoice-payer.entity';
import { InvoicePixEntity } from './invoice-pix.entity';

export class InvoiceEntity implements IInvoice {
  // #region Properties (43)
  public addition: number = 0 ;
  public bankSlip: IInvoiceBankSlip | null = null;
  public bankSlipExtraDue: number = 1;
  public createdAt: Date = new Date();
  public creditCard: IInvoiceCreditCard | null = null;
  public currency: string = 'BRL';
  public customerId: string | null = null;
  public discount: number = 0;
  public email: string | null = null;
  public externalInvoiceId: string = '';
  public externalInvoiceUrl: string = '';
  public id: string = '';
  public items: InvoiceItemEntity[] = [new InvoiceItemEntity];
  public logs: InvoiceLogEntity[] = [new InvoiceLogEntity];
  public notes: string = '';
  public paidAt: Date | null = null;
  public expiresAt: Date | null = new Date(this.createdAt.getFullYear(), this.createdAt.getMonth(), this.createdAt.getDate() +1);
  public payer: ICustomerInfo = new CustomerInfoEntity;
  public paymentMethod: EPaymentType = EPaymentType.NONE;
  public pix: IInvoicePix | null = null;
  public sandbox: boolean = false;
  public status: EInvoiceStatus = EInvoiceStatus.PENDING;
  public subTotal: number = 0;
  public subscriptionId: string = '';
  public totalAmount: number = 0;
  public totalFee: number = 0;
  public totalOverPaid: number = 0;
  public totalPaid: number = 0;
  public totalRefunded: number = 0;
  public updatedAt: Date = this.createdAt;
  public notificationUrl: string = '';
  public returnUrl: string = '';
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
