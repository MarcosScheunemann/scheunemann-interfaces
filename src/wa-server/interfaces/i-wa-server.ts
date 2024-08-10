import { IEvolutionInstance } from '../../evolution';
import { EWaServerStatus } from '../enums';

export interface IWaServer {
  active: boolean;
  name: string;
  createdAt: Date;
  updatedAt: Date;
  stack: string;
  status: EWaServerStatus;
  id: string;
  tags: string[];
  baseUrl: string;
  globalApiKey: string;
  instances: IEvolutionInstance[];
  sessions: number;
}
