import { EDiscountType, SponsorshipValueEntity } from '../../general';
import { EVoucherStatus } from '../enums';
import { IVoucher } from '../interfaces';

export class VoucherEntity implements IVoucher {
  // #region Properties (21)

  // se permite ou não a alteração do nome do cupom pelo parceiro
  public allowsKeyChange: boolean = false;
  // valor do desconto (soma do valor de todos os patrocínios - sponsorship)
  public amount: number = 0;
  public appId: string[] = [];
  // ID da campanha associada (opcional para uso futuro)
  campaignId?: string | null = null;
  // ID da empresa associada ao cupom (opcional)
  companyId?: string | null = null;
  // ID do recipiente ou contexto onde o cupom é válido (opcional)
  containerId?: string | null = null;
  // data de criação do cupom
  public createdAt: Date = new Date();
  // descrição opcional do cupom
  description?: string | null = null;
  // tipo de desconto: porcentagem ou valor fixo
  public discountType: EDiscountType = EDiscountType.FIXED_AMOUNT;
  // data de validade do cupom
  public expirationDate: Date = new Date(Date.now() + 1000 * 60 * 60 * 24 * 30);
  public id: string = '';
  // se a chave do cupom é pública ou privada
  public isPublic: boolean = true;
  // chave única para o cupom
  public key: string = '';
  // máximo de utilizações permitidas (-1 para ilimitado)
  public maxUses: number = -1;
  // ID do parceiro associado ao cupom (opcional)
  public partnersId: string[] = [];
  public recurrent: boolean = false;
  // informação de patrocínio (opcional)
  public sponsorship: SponsorshipValueEntity[] = [];
  // status do cupom
  public status: EVoucherStatus = EVoucherStatus.PLACED;
  public tags: string[] = [];
  // data da última atualização do cupom
  public updatedAt: Date = new Date();
  // contador de quantas vezes o cupom foi usado
  public usedCount: number = 0;

  // #endregion Properties (21)

  // #region Constructors (1)

  constructor(data?: Partial<VoucherEntity>) {
    if (data) {
      for (let key in data) {
        if (data.hasOwnProperty(key) && key in this) {
          (this as any)[key] = (data as any)[key];
        }
      }
    }
  }
  partnerId: string[];

  // #endregion Constructors (1)
  // data da última atualização da campanha
}
