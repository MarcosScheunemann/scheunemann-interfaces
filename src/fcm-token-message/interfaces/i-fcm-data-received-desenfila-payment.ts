import { EFcmSkill } from '../enums/skill.enum';

export interface IFcmDataReceivedDesenfilaPayment {
  // #region Properties (5)

  callback: string;
  companyId: string;
  containerId: string;
  id: string;
  refId: string;
  skill: EFcmSkill;

  // #endregion Properties (5)
}
