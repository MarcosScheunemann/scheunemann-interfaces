export interface IOrderTotal {
    // #region Properties (5)

    /** Valor final, equivalente ao subTotal + deliveryFee - benefits */
    additionalFees: number;
    /** Valor consolidado dos descontos aplicados ao pedido */
    benefits: number;
    /** Valor total de entrega */
    deliveryFee: number;
    /** Montante total representado pelo preço dos itens no pedido */
    orderAmount: number;
    /** Subtotal do pedido */
    subTotal: number;

    // #endregion Properties (5)
}
