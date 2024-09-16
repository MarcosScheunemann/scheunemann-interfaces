import { EPagBankShippingServiceType } from '../enums/shipping-service-type.enum';
import { EPagBankShippingType } from '../enums/shipping-type.enum';
import { IPagBankAddress } from './i-address';
import { IPagBankBox } from './i-box';

export interface IPagBankShipping {
  address: IPagBankAddress[];
  type?: EPagBankShippingType;
  service_type?: EPagBankShippingServiceType;
  address_modifiable?: boolean;
  amount?: number;
  box?: IPagBankBox;
}
