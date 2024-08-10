export interface IEvolutionDatabaseQueue {
  // #region Properties (11)

  active: boolean;
  baseUrl: string;
  createdAt: number;
  id: string;
  globalApikey: string;
  instanceName: string;
  log: string[];
  notified: boolean;
  notifiedAt: number;
  sendAt: number;
  phoneNumber: string;
  text: string;
  updatedAt: number;

  // #endregion Properties (11)
}
