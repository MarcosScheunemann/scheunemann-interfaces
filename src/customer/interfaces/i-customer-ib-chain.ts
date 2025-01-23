import { ISubscriptionCustomer } from "../../subscription-customer";
import { ECustomerStatus } from "../enums";
import { ICustomer } from "./i-customer";

export interface ICustomerIbChain extends ICustomer {
  blockedReason: string | null;
  status: ECustomerStatus;
  
  subscription: ISubscriptionCustomer | null;
  subscriptionId: string | null;
}
