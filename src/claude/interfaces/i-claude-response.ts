import { IClaudeContent } from "./i-claude-content";
import { IClaudeUsage } from "./i-claude-usage";

export interface IClaudeResponse {
  content: IClaudeContent[];
  id: string;
  model: string;
  role: string;
  stop_reason: string;
  stop_sequence: string | null;
  type: string;
  usage: IClaudeUsage;
} 