import { IChatGeminiUsage } from "./i-chat-gpt-usage";

export interface IChatGeminiResponse {
    usageMetadata: IChatGeminiUsage
    candidates: any[]
    promptFeedback: any
}
