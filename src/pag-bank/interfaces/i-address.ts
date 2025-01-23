import { IPagBankPhone } from "./i-phone";

export interface IPagBankAddress  {
  street: string;        // Rua do endereço, Ex: "Avenida Brigadeiro Faria Lima"
  number: string;        // Número do endereço, Ex: "1384"
  complement?: string;   // Complemento do endereço, Ex: "Casa" (opcional)
  locality: string;      // Bairro do endereço, Ex: "Pinheiros"
  city: string;          // Cidade do endereço, Ex: "São Paulo"
  region: string;        // Nome do Estado, Ex: "São Paulo"
  region_code: string;   // Código do Estado, Ex: "SP"
  country: string;       // País do endereço, Ex: "BRA"
  postal_code: string;   // CEP do endereço, Ex: "01452002"
}