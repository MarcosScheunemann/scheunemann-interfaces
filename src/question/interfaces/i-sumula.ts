import { EThirdLevelCases } from "../enums/third-level-cases.enum";
import { ETributeTax } from "../enums/tribute-tax.enum";

export interface ISumula {
  id: string;
  description: string;
  name: string;
  thrirdLevelCase: EThirdLevelCases;
  taxCase: ETributeTax;
  createdAt: Date;
  updatedAt: Date;
  active: boolean;
}
