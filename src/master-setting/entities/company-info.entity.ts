
import { TokenEntity } from '../../token';
import { ICompanyInfo } from '../interfaces/i-company-info';

export class CompanyInfo implements ICompanyInfo {
    // #region Properties (9)

    public companyId: string = '';
    public containerId: string = '';
    public partnerId: string = '';
    public customerId: string = '';
    public tokenId: string = '';
    public uid: string = '';
    public userEmail: string = '';
    public userName: string = '';
    public userPhoneNumber: string = '';
    public userPhotoUrl: string = '';

    constructor(req: TokenEntity | null) {
        this.companyId = req?.companyId || '';
        this.partnerId = req?.partnerId || '';
        this.containerId = req?.containerId || '';
        this.customerId = req?.customerId || '';
        this.tokenId = req?.id || '';
        this.userEmail = '';
        this.userPhotoUrl = '';
        this.userPhoneNumber = '';
        this.uid = '';
        this.userName = '';
    }

    // #endregion Constructors (1)
}
