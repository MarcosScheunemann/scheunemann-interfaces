import { EFcmSkill } from '../enums/skill.enum';

export interface IFcmDataRequestItems {
  // #region Properties (5)

  callback: string;
  companyId: string;
  containerId: string;
  pos: string;
  skill: EFcmSkill;

  // #endregion Properties (5)
}
