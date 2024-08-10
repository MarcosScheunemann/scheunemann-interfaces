export interface IOrderItemOption {
    // #region Properties (15)

    ean: string;
    externalCode: string;
    id: string;
    index: number;
    name: string;
    options: IOrderItemOption[];
    optionsPrice: number;
    preparationPlaceId: string;
    price: number;
    productId: string;
    quantity: number;
    skill: string;
    totalPrice: number;
    unit: string;
    weight: number;

    // #endregion Properties (15)
}
