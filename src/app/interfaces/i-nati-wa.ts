import { EEvolutionEvent, EEvolutionInstanceType } from '../../evolution';

export interface INatiWa {
  // #region Properties (23)
  type: EEvolutionInstanceType;
  id: string;
  waServerId: string;
  instanceName: string;
  token: string;
  qrcode: boolean;
  number: string;
  webhook: IWebhook | null;
  typebot: ITypebot | null;
  chatwoot: IChatWoot | null;
}

interface IChatWoot {
  chatwootAccountId: number;
  chatwootToken: string;
  chatwootUrl: string;
  chatwootSignMsg: boolean;
  chatwootReopenConversation: boolean;
  chatwootConversationPending: boolean;
}
interface IWebhook {
  webhook: string | null;
  webhookByEvents: boolean;
  events: EEvolutionEvent[];
}
interface ITypebot {
  typebot: string | null;
  typebotExpire: number;
  typebotKeywordFinish: string;
  typebotDelayMessage: number;
  typebotUnknownMessage: string;
  typebotListeningFromMe: boolean;
  typebotUrl: string | null;
}
