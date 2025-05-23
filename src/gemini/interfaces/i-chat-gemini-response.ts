import { IChatGeminiUsage } from "./i-chat-gpt-usage";

export interface IChatGeminiResponse {
    usage: IChatGeminiUsage
    text: string
}
