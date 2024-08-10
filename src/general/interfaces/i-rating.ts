export interface IRating {
    // #region Properties (3)
    userId: string;
    rating: number;
    comment?: string;
    createdAt: Date;
    // #endregion Properties (3)
}