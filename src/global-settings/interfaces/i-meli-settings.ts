import { EGlobalSettingsType } from "../enums/global-settings-type.enum";

export interface IMercadoPagoSettings {
    accessToken: string;
    acessToken_test: string;
    public_key: string;
    public_key_test: string;
    client_secret: string;
    active: boolean;
    type: EGlobalSettingsType;
    id: string;
    createdAt: Date;
    updatedAt: Date;
}