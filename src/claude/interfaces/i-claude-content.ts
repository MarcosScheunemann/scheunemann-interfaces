import { EClaudeContentType } from "../enums/content-type.enum";
export interface IClaudeContent {
    type: EClaudeContentType;
    text?: string;
    source?: {
        type: string;
        media_type: string;
        data: string;
    };
} 