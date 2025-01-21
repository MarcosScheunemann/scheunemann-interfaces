import { EChatGptRole } from "../enums/role.enum";

export interface IChatGptMessage {
  role: EChatGptRole;
  content: string;
} 