import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { BehaviorSubject } from 'rxjs';
import { ICredentialToken } from './interfaces/i-credential-token';
import { IPayload } from './interfaces/i-payload';

@Injectable({
    providedIn: 'root',
})
export class PayloadService {
    // #region Properties (1)

    public payload$: BehaviorSubject<IPayload | null> = new BehaviorSubject<IPayload | null>(null);


    // #endregion Properties (1)

    // #region Constructors (1)

    constructor(private helper: JwtHelperService) { }

    // #endregion Constructors (1)

    // #region Public Methods (1)

    public processToken(obj: ICredentialToken | null): void {
        if (!obj?.token) {
            this.nextPayload(null);
        } else {
            const payload = this.helper.decodeToken(obj.token);
            payload.token = obj.token;
            this.nextPayload(payload);
        }
    }

    // #endregion Public Methods (1)

    // #region Private Methods (2)

    private nextPayload(payload: IPayload | null) {
        if (!this.payload$) {
            this.payload$ = new BehaviorSubject<IPayload | null>(null);
            this.payload$.next(null);
        } else {
            if (payload === undefined) {
                payload = null;
            }
            this.payload$.next(payload);
        }
    }

    // #endregion Private Methods (2)
}