import { IOrder } from '../../../order';

export interface IDelivererMobyo {
  id: string;
  cellPhone: string;
  email?: string;
  name: string;
  nickName: string;
  tags: string[];
  ordersCountDeliveredOnRestaurant: IOrder[];
  pictureUrl?: string;
}
