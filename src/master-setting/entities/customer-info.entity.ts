import { ICustomer } from '../../customer';
import { TokenEntity } from '../../token';
import { ICustomerInfo } from '../interfaces/i-customer-info';

export class CustomerInfoEntity implements ICustomerInfo {
    // #region Properties (6)

    public tokenId: string = '';
    public customerId: string = '';
    public name: string | null = '';
    public email: string | null = '';
    public phoneNumber: string | null = '';

    constructor(req?: TokenEntity | null) {
        this.tokenId = req?.id ||'';
        this.customerId = req?.customerId || '';
        this.name = req?.companyName || '';
        this.email = '';
        this.phoneNumber = '';
    }
}
