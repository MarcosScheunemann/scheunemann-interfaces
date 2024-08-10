import { OrderScaleItemEntity } from './scale-item.entity'; // Ajuste este import de acordo com o caminho real do arquivo.

export class OrderScaleEntity {
    // #region Properties (2)

    public defaultPrice: number = 0;
    public scales: OrderScaleItemEntity[] = [];

    // #endregion Properties (2)

    // #region Constructors (1)

    constructor(data?: Partial<OrderScaleEntity>) {
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
