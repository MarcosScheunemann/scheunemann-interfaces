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
            for (let key in data) {
                if (data.hasOwnProperty(key) && key in this) {
                    (this as any)[key] = (data as any)[key];
                }
            }
        }
    }
} 