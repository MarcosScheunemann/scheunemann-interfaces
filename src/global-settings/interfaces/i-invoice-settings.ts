import { EGlobalSettingsType } from "../enums/global-settings-type.enum";

export interface IInvoiceSettings {
    billingDays: number;
    type: EGlobalSettingsType;
    id: string;
    active: boolean;
    createdAt: Date;
    updatedAt: Date;
}