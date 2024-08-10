export class OrderItemCompositionEntity {
  // #region Properties (6)

  public amount: number = 0;
  public code: string = '';
  public description: string = '';
  public imageUrl: string = '';
  public quantity: number = 0;
  public unit: string = '';

  // #endregion Properties (6)

  // #region Constructors (1)

  constructor(data?: Partial<OrderItemCompositionEntity>) {
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
