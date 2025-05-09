import { EDocType, IAddress } from '../../general';

export interface ICustomerData {
    address: IAddress | null;
    doc: string;
    docType: EDocType;
    name: string;
    internationalCode: string;
    phoneNumber: string;
    email: string;
}
