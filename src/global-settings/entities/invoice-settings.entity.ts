import { EGlobalSettingsType } from '../enums/global-settings-type.enum';
import { IInvoiceSettings } from '../interfaces/i-invoice-settings';

export class InvoiceSettingsEntity implements IInvoiceSettings {
    public active: boolean = false;
    public billingDays: number = 0;
    public createdAt: Date = new Date();
    public id: string = '';
    public type: EGlobalSettingsType = EGlobalSettingsType.INVOICE_CONFIG;
    public updatedAt: Date = new Date();

    constructor(data?: Partial<InvoiceSettingsEntity>) {
        if (data) {
          for (let key in data) {
            if (data.hasOwnProperty(key) && key in this) {
              (this as any)[key] = (data as any)[key];
            }
          }
        }
      }
} 