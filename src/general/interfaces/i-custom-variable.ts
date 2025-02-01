// src/models/base.entity.ts

import { ECustomVariables } from "../enums/custom-var.enum";

export interface ICustomVariable {
  // #region Properties (2)

  name: ECustomVariables | string;
  value: string | Date | boolean;

  // #endregion Properties (2)
}
