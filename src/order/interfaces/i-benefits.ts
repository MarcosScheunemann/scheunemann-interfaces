import { ISponsorshipValue } from '../../general/interfaces';

export interface IOrderBenefits {
  // #region Properties (6)

  description: string;
  id: string;
  sponsorshipValues: ISponsorshipValue[];
  target: string;
  targetId: string;
  value: number;

  // #endregion Properties (6)
}
