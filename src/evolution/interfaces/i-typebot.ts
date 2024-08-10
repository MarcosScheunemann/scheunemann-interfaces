export interface IEvolutionTypebot {
  instanceName: string;
  typebot: {
    enabled: boolean;
    url: string;
    typebot: string;
    expire: number;
    keywordFinish: string;
    delayMessage: number;
    unknownMessage: string;
    listeningFromMe: boolean;
  };
}
