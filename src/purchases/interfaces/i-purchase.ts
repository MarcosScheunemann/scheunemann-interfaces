import { EPaymentProvider } from '../../general/enums/providers.enum';
import { IOrder } from '../../order';
import { IAppInfo } from './i-app-info';

/**
 * Representa uma compra dentro do sistema.
 * Esta interface fornece uma separação clara de diferentes aspectos da compra,
 * como detalhes do pagamento e informações sobre o aplicativo.
 */
export interface IPurchase extends IOrder {
  // #region Properties (4)

  /** Qualquer informação adicional ou notas relacionadas à compra. */
  additionalNotes?: string;
  /** Informações sobre o aplicativo ou módulo ativado. */
  appInfo: IAppInfo;
  /** ID do dispositivo para o qual o aplicativo foi ativado. */
  deviceUid: string;
  /** Identificação da origem do pagamento ex: DESENFILA */
  providerName: EPaymentProvider;

  // #endregion Properties (4)
}
