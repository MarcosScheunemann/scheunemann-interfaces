import { IEvolutionChatWoot } from './i-chatwoot';

export interface IEvolutionInstance {
  // #region Properties (7)

  instanceName: string;
  instanceId: string;
  status: 'open' | 'close' | 'connecting' | string;
  serverUrl: string;
  apikey: string;
  owner: string | null;
  profileName: string | null;
  profilePictureUrl: string | null;
  profileStatus: string | null;
  chatwoot: IEvolutionChatWoot | null;

  // #endregion Properties (7)
}
