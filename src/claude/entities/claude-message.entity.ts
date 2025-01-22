import { EClaudeRole } from '../enums/role.enum';
import { IClaudeMessage } from '../interfaces/i-claude-message';

export class ClaudeMessageEntity implements IClaudeMessage {
  public role: EClaudeRole = EClaudeRole.ASSISTANT;
  public content: string = '';

  constructor(data?: Partial<ClaudeMessageEntity>) {
    if (data) {
      Object.assign(this, data);
    }
  }
} 