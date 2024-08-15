import { TokenEntity } from '../../token';
import { ICustomerInfo } from '../interfaces/i-customer-info';

export class CustomerInfoEntity implements ICustomerInfo {
    // #region Properties (6)

    public tokenId: string = '';
    public customerId: string = '';
    public userEmail: string = '';
    public userName: string = '';
    public userPhoneNumber: string = '';
    public userPhotoUrl: string = '';

    constructor(req: TokenEntity | null) {
        this.customerId = req?.customerId || '';
        this.tokenId = req?.id ||'';
        this.userEmail = '';
        this.userPhotoUrl = '';
        this.userPhoneNumber = '';
        this.userName = '';
    }
}
