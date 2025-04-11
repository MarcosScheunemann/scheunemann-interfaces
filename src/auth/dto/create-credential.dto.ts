export class CreateCredentialDto {
    // #region Properties (4)

    public email: string;
    public name: string;
    public password: string;
    public phone: string;

    // #endregion Properties (4)

    // #region Constructors (1)

    constructor() {
        this.name = '';
        this.email = '';
        this.phone = '';
        this.password = '';
    }

    // #endregion Constructors (1)
}