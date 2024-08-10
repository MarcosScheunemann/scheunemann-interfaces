export interface IToken {
  // #region Properties (18)

  active: boolean;
  createdAt: number;
  expiresAt: number;
  id: string;
  name: string;
  companyId: string | null;
  companyName: string;
  partnerId: string | null;
  customerId: string | null;
  containerId: string | null;
  sandbox: boolean;
  lastAccessAt: number;
  description: string;
  value: string;

  // #endregion Properties (18)
}
