import { EDiscountType, ISponsorshipValue } from '../../general';
import { EVoucherStatus } from '../enums';

export interface IVoucher {
  // #region Properties (20)

  // se permite ou não a alteração do nome do cupom pelo parceiro
  allowsKeyChange: boolean;
  // valor do desconto (soma do valor de todos os patrocínios - sponsorship)
  amount: number;
  appId: string[];
  // ID da campanha associada (opcional para uso futuro)
  campaignId?: string | null;
  // ID da empresa associada ao cupom (opcional)
  companyId?: string | null;
  // ID do recipiente ou contexto onde o cupom é válido (opcional)
  containerId?: string | null;
  // data de criação do cupom
  createdAt: Date;
  // descrição opcional do cupom
  description?: string | null;
  // tipo de desconto: porcentagem ou valor fixo
  discountType: EDiscountType;
  // data de validade do cupom
  expirationDate: Date;
  id: string;
  // se a chave do cupom é pública ou privada
  isPublic: boolean;
  // chave única para o cupom
  key: string;
  // máximo de utilizações permitidas (-1 para ilimitado)
  maxUses: number;
  // ID do parceiro associado ao cupom (opcional)
  partnerId: string[];
  // informação de patrocínio (opcional)
  sponsorship: ISponsorshipValue[];
  // status do cupom
  status: EVoucherStatus;
  tags: string[];
  // data da última atualização do cupom
  updatedAt: Date;
  // contador de quantas vezes o cupom foi usado
  usedCount: number;
  recurrent: boolean;

  // #endregion Properties (20)
  // data da última atualização da campanha
}
