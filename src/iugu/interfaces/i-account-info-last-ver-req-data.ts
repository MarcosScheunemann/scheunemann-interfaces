import { EBooleanString } from '../../general/enums';
import { ELegalEntiy } from '../../general/enums/person-type.enum';

export interface IIuguLastVerificationRequestData {
  // #region Properties (19)

  accountType: string;
  address: string;
  automaticTransfer: EBooleanString;
  bank: string;
  bankAg: string;
  bankCc: string;
  businessType: string;
  cep: string;
  city: string;
  cpf: string;
  documentActivity: string;
  documentCpf: string;
  documentId: string;
  name: string;
  personType: ELegalEntiy;
  physicalProducts: EBooleanString;
  priceRange: string;
  state: string;
  telephone: string;

  // #endregion Properties (19)
}
