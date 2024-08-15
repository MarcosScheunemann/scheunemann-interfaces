export interface IQuery {
    // #region Properties (1)

    limit: string;
    startDate?: string;
    endDate?: string;
    status?: string;
    sandbox?: 'true' | 'false' | 'undefined' | 'null' | '';
    filterBy?: 'startDate' | 'endDate' | 'none';
    query?: string;
    lastDocId?: string | undefined | null;
    apikey?: string | undefined | null;

    // #endregion Properties (1)
}
