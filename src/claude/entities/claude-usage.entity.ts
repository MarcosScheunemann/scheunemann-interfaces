import { IClaudeUsage } from '../interfaces/i-claude-usage';

export class ClaudeUsageEntity implements IClaudeUsage {
  public input_tokens: number = 0;
  public output_tokens: number = 0;

  constructor(data?: Partial<ClaudeUsageEntity>) {
    if (data) {
        for (let key in data) {
            if (data.hasOwnProperty(key) && key in this) {
                (this as any)[key] = (data as any)[key];
            }
        }
    }
}
} 