import { EAppMode } from '../enums';

export interface INatigo {
  // #region Properties (6)

  /**
   * Indica se a verificação do documento é permitida
   */
  type: EAppMode;
  documentVerificationAllowed: boolean;
  /**
   * Indica se o acesso é restrito a maiores de idade
   */
  isForAdultsOnly: boolean;
  /**
   * Indica se o acesso é restrito a usuários logados
   */
  openLockRequired: boolean;
  /**
   * URL de abertura do NATIGO
   */
  url: string;
  /**
   * Versão da configuração
   */
  version: string;
  updatedAt: Date;
  syncAt: Date | null;

  // #endregion Properties (6)
}
