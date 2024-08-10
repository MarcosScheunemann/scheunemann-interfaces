export interface IClientAplicationCredential {
  // #region Properties (4)

  refreshToken: string | null;
  refreshTokenAt: Date | null;
  secrets: string | null;
  token: string | null;

  // #endregion Properties (4)
}
