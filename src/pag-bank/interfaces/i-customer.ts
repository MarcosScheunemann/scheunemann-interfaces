import { IPagBankPhone } from "./i-phone";

export interface IPagBankCustomer {
  nome: string;           // Nome do cliente, Ex: "João Souza"
  email: string;          // E-mail do cliente, Ex: "joaosouza@gmail.com"
  tax_id: string;         // Documento de identificação pessoal (CPF/CNPJ)
  phone: IPagBankPhone[]; // Lista de telefones do cliente
}