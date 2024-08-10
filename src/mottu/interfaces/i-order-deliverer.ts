import { IMottuAddress } from './i-address';

export interface IMottuOrderDeliverer {
  // #region Properties (14)

  address: IMottuAddress;
  code: string | null;
  deliveryCode: number | null;
  distance: number | null;
  dropoffCode: number | null;
  fullCode: string | null;
  id: number | null;
  name: string | null;
  observation: string | null;
  onlinePayment: boolean;
  orderRoute: number;
  phone: string | null;
  productValue: number | null;
  situation: number | null;

  // #endregion Properties (14)
}
