import { EClaudeRole } from "../enums/role.enum";

export interface IClaudeMessage {
  role: EClaudeRole;
  content: string;
} 