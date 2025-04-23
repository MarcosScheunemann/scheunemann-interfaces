import { EPlanIdentifier } from '../../plan';
import { CustomVariableEntity } from '../entities';
import { ECustomVariables } from '../enums';

type PlanVariablesMapping = Record<EPlanIdentifier, CustomVariableEntity[]>;

export const PLAN_VARIABLES: PlanVariablesMapping = {
  [EPlanIdentifier.BASIC]: [
    {
      name: ECustomVariables.ID,
      value: EPlanIdentifier.BASIC,
    },
  ],
  [EPlanIdentifier.STANDARD]: [
    {
      name: ECustomVariables.ID,
      value: EPlanIdentifier.STANDARD,
    },
    {
      name: ECustomVariables.CUSTOM_FOOTER,
      value: true,
    },
    {
      name: ECustomVariables.SECOND_OPINION,
      value: true,
    },
  ],
  [EPlanIdentifier.ENTERPRISE]: [
    {
      name: ECustomVariables.ID,
      value: EPlanIdentifier.ENTERPRISE,
    },
    {
      name: ECustomVariables.CUSTOM_FOOTER,
      value: true,
    },
    {
      name: ECustomVariables.SECOND_OPINION,
      value: true,
    },
    {
      name: ECustomVariables.CAN_ATTACH_FILES,
      value: true,
    },
  ],
  [EPlanIdentifier.DEFAULT]: [
    {
      name: ECustomVariables.ID,
      value: EPlanIdentifier.DEFAULT,
    },
  ],
  [EPlanIdentifier.PREMIUM]: [
    {
      name: ECustomVariables.ID,
      value: EPlanIdentifier.PREMIUM,
    },
  ],
  [EPlanIdentifier.TRIAL]: [
    {
      name: ECustomVariables.ID,
      value: EPlanIdentifier.TRIAL,
    },
  ],
  [EPlanIdentifier.ULTIMATE]: [
    {
      name: ECustomVariables.ID,
      value: EPlanIdentifier.ULTIMATE,
    },
  ],
};
