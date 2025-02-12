export interface IMeliPreferencePayerPayment {
    // #region Properties (5)

    default_installments: number;
    default_payment_method_id: string;
    /**
     * Método que exclui bandeiras específicas de cartões de crédito e débito, 
     * como Visa, Mastercard, American Express, entre outros.
     */
    excluded_payment_methods: [
        {
            id: string;
        }
    ];
    /**
     * Método que exclui meios de pagamento indesejados, 
     * como cartão de crédito, ticket (boleto ou pagamento em lotérica), entre outros.
     */
    excluded_payment_types: [
        {
            id: string;
        }
    ];
    /**
     * Método que define o número máximo de parcelas a serem ofertadas.
     */
    installments: number;

    // #endregion Properties (5)
}
