// src/models/base.entity.ts

export interface IPaymentTokenData {
    // #region Properties (7)

    bin: string;
    brand: string;
    displayNumber: string;
    firstDigits: string;
    maskedNumber: string;
    month: number;
    year: number;

    // #endregion Properties (7)
}
