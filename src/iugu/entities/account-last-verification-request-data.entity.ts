import { EBooleanString } from '../../general/enums';
import { ELegalEntiy } from '../../general/enums/person-type.enum';
import { IIuguAccountLastVerificationRequestData } from '../interfaces';

export class LastVerificationRequestDataEntity implements IIuguAccountLastVerificationRequestData {
  // #region Properties (19)

  public accountType: string = '';
  public address: string = '';
  public automaticTransfer: EBooleanString = EBooleanString.FALSE;
  public bank: string = '';
  public bankAg: string = '';
  public bankCc: string = '';
  public businessType: string = '';
  public cep: string = '';
  public city: string = '';
  public cpf: string = '';
  public documentActivity: string = '';
  public documentCpf: string = '';
  public documentId: string = '';
  public name: string = '';
  public personType: ELegalEntiy = ELegalEntiy.LEGAL;
  public physicalProducts: EBooleanString = EBooleanString.FALSE;
  public priceRange: string = '';
  public state: string = '';
  public telephone: string = '';

  // #endregion Properties (19)

  // #region Constructors (1)

  constructor(data?: Partial<LastVerificationRequestDataEntity>) {
    if (data) {
      for (let key in data) {
        if (data.hasOwnProperty(key) && key in this) {
          (this as any)[key] = (data as any)[key];
        }
      }
    }
  }

  // #endregion Constructors (1)
}
