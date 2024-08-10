/**
 * Representa informações básicas sobre um aplicativo ou módulo dentro do sistema.
 */
export interface IAppInfo {
    /** Identificador único do aplicativo ou módulo. */
    appId: string;

    /** Nome amigável ou título do aplicativo. */
    name: string;

    /** Versão do aplicativo ou módulo. */
    version: string;
}
