import { INatiV1CartDesenfila } from './i-cart-desenfila';
import { INatiV1CartItem } from './i-cart-item';

export interface INatiV1Cart {
  // #region Properties (21)

  addition: number;
  askedForTheBill: boolean;
  blocked: boolean;
  customerId: string;
  desenfila?: INatiV1CartDesenfila | null;
  dtAlteracao: Date;
  firstDate: Date;
  id: number;
  idOperadorCaixa: number;
  items: INatiV1CartItem[];
  lastDate: Date;
  people: number;
  qrCode?: string;
  tableId: number;
  terminalId: string;
  total: number;
  useByUser: string;
  uuid: string;
  vrDesconto: number;
  vrLimite: number;
  wasReturned: boolean;

  // #endregion Properties (21)
}
