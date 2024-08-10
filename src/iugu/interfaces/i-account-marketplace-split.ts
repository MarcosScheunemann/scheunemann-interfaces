/* eslint-disable @typescript-eslint/naming-convention */
export interface IIuguMarketplaceSplit {
    // #region Properties (34)

    bankSlipCents: number;
    bankSlipPercent: number;
    cents: number;
    creditCardCents: number;
    creditCardPercent: number;
    creditCard_10xCents: number;
    creditCard_10x_percent: number;
    creditCard_11xCents: number;
    creditCard_11x_percent: number;
    creditCard_12xCents: number;
    creditCard_12x_percent: number;
    creditCard_1xCents: number;
    creditCard_1x_percent: number;
    creditCard_2xCents: number;
    creditCard_2x_percent: number;
    creditCard_3xCents: number;
    creditCard_3x_percent: number;
    creditCard_4xCents: number;
    creditCard_4x_percent: number;
    creditCard_5xCents: number;
    creditCard_5x_percent: number;
    creditCard_6xCents: number;
    creditCard_6x_percent: number;
    creditCard_7xCents: number;
    creditCard_7x_percent: number;
    creditCard_8xCents: number;
    creditCard_8x_percent: number;
    creditCard_9xCents: number;
    creditCard_9x_percent: number;
    percent: number;
    /**
     * Permite agregar comissionamento percentual + fixo.
     */
    permit_aggregated: boolean;
    pixCents: number;
    pixPercent: number;
    /**
     * ID Da conta que irá receber o split.
     */
    recipientAccountId: string;

    // #endregion Properties (34)
}
