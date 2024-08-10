import { IGlobalSettingIugu } from '../interfaces/i-global-setting-iugu';

export class GlobalSettingIuguEntity implements IGlobalSettingIugu {
  // #region Properties (13)

  /**
   * Prazo máximo para pagamento do boleto após o vencimento.
   * O prazo máximo para pagamento deve ser entre "1" e "30"
   * dias após a data de vencimento.
   */
  public bankSlipExtraDue: number = 1;
  /**
   * Prazo de dias para o vencimento da fatura.
   */
  public billingDays: number = 10;
  /**
   * Se true, garante que a data de vencimento seja apenas em dias de semana,
   * e não em sábados ou domingos.
   */
  public ensureWorkdayDueDate: boolean = true;
  /**
   * Expira uma fatura e impossibilita o seu pagamento depois 'x' dias após o vencimento.
   * Valor enviado precisa estar entre 0 e 30. Se for enviado "0", a fatura ficará
   * disponível para ser paga até às 23:59:59 do dia de vencimento.
   */
  public expiresIn: number = 0;
  /**
   * Habilitar ou Desabilitar multa por atraso de pagamento
   */
  public fines: boolean = true;
  /**
   * Determine a multa % a ser cobrada para pagamentos
   * efetuados após a data de vencimento
   */
  public latePaymentFine: number = 2;
  /**
   * Determine a multa por valor fixo a ser
   * cobrada para pagamentos efetuados após a data de vencimento
   */
  public latePaymentFineCents: number = 0;
  public liveApiToken: string = '';
  /**
   * determina se cobra ou não juros por dia de atraso.
   * 1% ao mês pro rata. Necessário passar a multa como true
   */
  public perDayInterest: boolean = true;
  /**
   * Juros a ser cobrado por dia em centavos.
   * Sobrepõem o per_day_interest_value.
   * O juros somado em 30 dias deve ser inferior a 50% do valor da fatura.
   */
  public perDayInterestCents: number = 0;
  /**
   * Informar o valor percentual de juros que deseja cobrar.
   * Não se aplica quando os valores diários de mora
   * calculados são menores que 1 centavo.
   */
  public perDayInterestValue: number = 1;
  public testApiToken: string = '';
  public userApiToken: string = '';

  // #endregion Properties (13)

  // #region Constructors (1)

  constructor(data?: Partial<GlobalSettingIuguEntity>) {
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
