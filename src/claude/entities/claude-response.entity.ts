import { IClaudeResponse } from '../interfaces/i-claude-response';
import { ClaudeContentEntity } from './claude-content.entity';
import { ClaudeUsageEntity } from './claude-usage.entity';

export class ClaudeResponseEntity implements IClaudeResponse {
  public id: string = '';
  public type: string = '';
  public role: string = '';
  public content: ClaudeContentEntity[] = [];
  public model: string = '';
  public stop_reason: string = '';
  public stop_sequence: string | null = null;
  public usage: ClaudeUsageEntity = new ClaudeUsageEntity();

  constructor(data?: Partial<ClaudeResponseEntity>) {
    if (data) {
        for (let key in data) {
            if (data.hasOwnProperty(key) && key in this) {
                (this as any)[key] = (data as any)[key];
            }
        }
    }
}
} 