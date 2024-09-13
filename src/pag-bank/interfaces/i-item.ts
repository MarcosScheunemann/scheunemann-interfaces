import { IPagBankPhone } from "./i-phone";

export interface IPagBankItem {
  name: string;           // Nome do cliente, Ex: "João Souza"
  quantity: number;          // E-mail do cliente, Ex: "joaosouza@gmail.com"
  unit_amount : number;         // Documento de identificação pessoal (CPF/CNPJ)
}