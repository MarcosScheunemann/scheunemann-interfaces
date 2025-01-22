import { IClaudeContent } from "./i-claude-content";
import { IClaudeUsage } from "./i-claude-usage";

export interface IClaudeResponse {
  content: IClaudeContent[];
  id: string;
  model: string;
  role: string;
  type: string;
  usage: IClaudeUsage;
} 