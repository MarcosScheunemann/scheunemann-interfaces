import { EMemberType } from "../../member";

export interface ICustomerInfo {
    customerId: string
    tokenId: string | null;
    name: string | null;
    email: string | null;
    phoneNumber: string | null;
    type:EMemberType
}
