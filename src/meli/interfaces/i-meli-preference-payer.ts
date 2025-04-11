import { IMeliPayerAddress } from "./i-meli-payer-address";
import { IMeliPayerIdentification } from "./i-meli-payer-identification";
import { IMeliPayerPhone } from "./i-meli-payer-phone";


export interface IMeliPreferencePayer {
    // #region Properties (6)

    address: IMeliPayerAddress,
    email: string,
    identification: IMeliPayerIdentification,
    name: string,
    phone: IMeliPayerPhone,
    surname: string,

    // #endregion Properties (6)
}
