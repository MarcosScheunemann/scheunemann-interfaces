import { IClaudeUsage } from '../interfaces/i-claude-usage';

export class ClaudeUsageEntity implements IClaudeUsage {
  public input_tokens: number = 0;
  public output_tokens: number = 0;
  public total_tokens: number = 0;

  constructor(data?: Partial<ClaudeUsageEntity>) {
    if (data) {
      Object.assign(this, data);
    }
  }
} 