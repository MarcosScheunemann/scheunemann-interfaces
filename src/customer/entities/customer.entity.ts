import { EAppType } from '../../app';
import { AddressEntity, DeliveryAreaEntity, DeliveryAreaFixedEntity, EDocType, PaymentProviderEntity } from '../../general';
import { ISubscriptionCustomer } from '../../subscription-customer';
import { ECustomerInterval, ECustomerStatus, ECustomerType } from '../enums';
import { ICustomer } from '../interfaces';

export class CustomerEntity implements ICustomer {
  // #region Properties (31)

  public address: AddressEntity = new AddressEntity();
  public blockedReason: string | null = null;
  public createdAt: Date = new Date();
  public deliveryArea: DeliveryAreaEntity[] = [];
  public deliveryAreaFixed?: DeliveryAreaFixedEntity | null | undefined = undefined;
  public doc: string = '';
  public docType: EDocType = EDocType.CPF;
  public email: string = '';
  public fullName: string = '';
  public id: string = '';
  public imageUrl: string | null = null;
  public internationalCode: string = '55';
  public interval: ECustomerInterval = ECustomerInterval.MONTHLY;
  public limit: number = 0;
  public name: string = '';
  public password: string = '';
  public paymentProvider: PaymentProviderEntity = new PaymentProviderEntity();
  public phoneNumber: string = '';
  public phoneNumberVerified: boolean = false;
  public phoneNumberVerifiedApp: EAppType | null = null;
  public phoneNumberVerifiedAt: Date | null = null;
  public phoneNumbersNotification: string[] = [];
  public refreshToken: string | null = null;
  public sandbox: boolean = false;
  public status: ECustomerStatus = ECustomerStatus.WAITING_CREDIT_ANALYSIS;
  public subscription: ISubscriptionCustomer | null = null;
  public tags: string[] = [];
  public token: string | null = null;
  public twoStepsVerification: boolean = false;
  public type: ECustomerType = ECustomerType.SINGLE;
  public updatedAt: Date = new Date();

  // #endregion Properties (31)

  // #region Constructors (1)

  constructor(data?: Partial<CustomerEntity>) {
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
