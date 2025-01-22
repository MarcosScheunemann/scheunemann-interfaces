import { EClaudeContentType } from '../enums/content-type.enum';
import { IClaudeContent } from '../interfaces/i-claude-content';

export class ClaudeContentEntity implements IClaudeContent {
    public type: EClaudeContentType = EClaudeContentType.TEXT;
    public text?: string;
    public source?: {
        type: string;
        media_type: string;
        data: string;
    };

    constructor(data?: Partial<ClaudeContentEntity>) {
        if (data) {
            Object.assign(this, data);
        }
    }
} 