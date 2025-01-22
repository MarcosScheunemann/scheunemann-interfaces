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
      for (const key in data) {
        if (data.hasOwnProperty(key) && key in this) {
          if (key === 'usage') {
            this.usage = new ClaudeUsageEntity(data.usage);
          } else if (key === 'content') {
            this.content = data.content?.map(content => new ClaudeContentEntity(content)) || [];
          } else {
            (this as any)[key] = (data as any)[key];
          }
        }
      }
    }
  }
} 