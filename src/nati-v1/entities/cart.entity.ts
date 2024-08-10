import { INatiV1Cart } from '../interfaces/i-cart';
import { INatiV1CartDesenfila } from '../interfaces/i-cart-desenfila';
import { INatiV1CartItem } from '../interfaces/i-cart-item';

export class NatiV1CartEntity implements INatiV1Cart {
  // #region Properties (21)

  public addition: number = 0;
  public askedForTheBill: boolean = false;
  public blocked: boolean = false;
  public customerId: string = '';
  public desenfila: INatiV1CartDesenfila | null | undefined = null;
  public dtAlteracao: Date = new Date();
  public firstDate: Date = new Date();
  public id: number = 0;
  public idOperadorCaixa: number = 0;
  public items: INatiV1CartItem[] = [];
  public lastDate: Date = new Date();
  public people: number = 0;
  public qrCode: string | undefined = undefined;
  public tableId: number = 0;
  public terminalId: string = '';
  public total: number = 0;
  public useByUser: string = '';
  public uuid: string = '';
  public vrDesconto: number = 0;
  public vrLimite: number = 0;
  public wasReturned: boolean = false;

  // #endregion Properties (21)

  // #region Constructors (1)

  constructor(data?: Partial<NatiV1CartEntity>) {
    if (data) {
      for (let key in data) {
        if (data.hasOwnProperty(key) && key in this) {
          (this as any)[key] = (data as any)[key];
        }
      }
    }
  }

  // #endregion Constructors (1)
}
