import { IRequestedItemData } from './i-requested-items-data';

export interface IRequestedItems {
  // #region Properties (11)

  companyId: string | null;
  containerId: string | null;
  createdAt: Date;
  pos: string | null;
  id: string;
  updatedAt: Date;
  preview: boolean;
  isPaid: boolean;
  token: string;
  data: IRequestedItemData[];
}
