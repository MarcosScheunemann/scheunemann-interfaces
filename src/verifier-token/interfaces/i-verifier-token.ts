export interface IVerifierToken {
  // #region Properties (8)

  createdAt: number;
  expiresAt: number;
  id: string;
  receiver: string;
  message: string;
  value: string;
  verified: boolean;
  verifiedAt: number;
  appId: string | null;

  // #endregion Properties (8)
}
