import { ELeadOrigin } from '../../general/enums';
import { LeadStatusEnum } from '../enums';

export interface ILead {
  // #region Properties (21)

  /**
   * Lista de atividades ou eventos relacionados ao lead.
   * Exemplo: ['Feira de negócios', 'Evento de lançamento', 'Reunião']
   * */
  activity?: string[];
  /**
   * Outros endereços de e-mail, se disponíveis.
   **/
  alternateEmails: string[];
  /**
   *  Números alternativos de telefone para contato.
   **/
  alternatePhones: string[];
  /**
   * ID do agente ou parceiro responsável pelo lead.
   **/
  assignedTo?: string;
  /**
   * Data e hora de criação.
   **/
  createdAt: Date;
  /**
   * Número do documento conforme o tipo.
   **/
  doc: string;
  /**
   * Tipo de documento (CPF, CNPJ, Passaporte, etc.).
   **/
  docType: any;
  /**
   * Endereço de e-mail principal para contato.
   **/
  email: string;
  /**
   * Identificador único do lead.
   **/
  id: string;
  /**
   * Lista de produtos ou serviços de interesse.
   */
  interestedIn: string[];
  internationalCode: string;
  /**
   * Data e hora do último contato.
   **/
  lastContacted?: Date;
  /**
   * Nome completo ou razão social do lead.
   **/
  name: string;
  /**
   * Notas ou observações adicionais.
   *  */
  note?: string;
  /**
   * Fonte de origem do lead.
   **/
  origin: ELeadOrigin;
  /**
   * Id do afiliado responsável pelo lead.
   */
  partnerId: string;
  /**
   * Número de telefone principal para contato.
   */
  phoneNumber?: string;
  /**
   * Indica se o lead está em sandbox ou não.
   */
  sandbox: boolean;
  /**
   * Status do lead.
   */
  status: LeadStatusEnum;
  /**
   * Lista de tags ou categorias para ajudar na segmentação e busca.
   */
  tags: string[];
  /**
   * Data e hora da última atualização.
   */
  updatedAt: Date;

  // #endregion Properties (21)
  // Etiquetas ou categorias para ajudar na segmentação e busca.
}
