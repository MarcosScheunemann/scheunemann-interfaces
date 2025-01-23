import { EClaudeContentType } from "../enums/content-type.enum";
export interface IClaudeContent {
    text?: string;
    type: EClaudeContentType;
    source?: {
        type: string;
        media_type: string;
        data: string;
    };
} 