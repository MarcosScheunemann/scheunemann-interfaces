import { EDocType, ELeadOrigin } from '../../general/enums';
import { LeadStatusEnum } from '../enums';
import { ILead } from '../interfaces';

export class LeadEntity implements ILead {
  // #region Properties (20)

  /**Lista de produtos ou serviços de interesse.  */
  activity?: string[] = [];
  /**Endereço de e-mail principal para contato.  */
  public alternateEmails: string[] = [];
  /**Número de telefone principal.  */
  public alternatePhones: string[] = [];
  /**ID do agente ou parceiro que cadastrou o lead.  */
  assignedTo?: string = '';
  /**Notas ou observações adicionais.  */
  public createdAt: Date = new Date();
  /**Tipo de documento (CPF, CNPJ, Passaporte, etc.).  */
  public doc: string = '';
  /**Identificador único do lead.  */
  public docType: EDocType = EDocType.CNPJ;
  /**Nome completo ou razão social do lead.  */
  public email: string = '';
  public id: string = '';
  /**Fonte de origem do lead.  */
  public interestedIn: string[] = [];
  /**Data e hora de criação.  */
  lastContacted?: Date = new Date();
  /**Número do documento conforme o tipo.  */
  public name: string = '';
  note?: string = '';
  public origin: ELeadOrigin = ELeadOrigin.OTHERS;
  /**Status atual.  */
  public partnerId: string = '';
  public internationalCode: string = '55';

  /**Outros endereços de e-mail, se disponíveis.  */
  phoneNumber?: string = '';
  /**Outros números de telefone, se disponíveis.  */
  public sandbox: boolean = false;
  /**Data e hora do último contato.  */
  public status: LeadStatusEnum = LeadStatusEnum.NEW;
  /**ID do colaborador responsável pelo lead.  */
  public tags: string[] = [];
  public updatedAt: Date = new Date();

  // #endregion Properties (20)

  // #region Constructors (1)

  constructor(data?: Partial<LeadEntity>) {
    if (data) {
      for (let key in data) {
        if (data.hasOwnProperty(key) && key in this) {
          (this as any)[key] = (data as any)[key];
        }
      }
    }
  }

  // #endregion Constructors (1)
  // Etiquetas ou categorias para ajudar na segmentação e busca.
}
