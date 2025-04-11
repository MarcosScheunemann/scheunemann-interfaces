import { MemberRulesEnum } from './rules.enum';

export interface IPayload {
    // #region Properties (24)

    apiKey: string;
    appName: string;
    authDomain: string;
    merchantId: string;
    createdAt: string;
    displayName: string;
    email: string;
    emailVerified: boolean;
    id: string;
    isAnonymous: boolean;
    lastLoginAt: string;
    claims: {
        containerId: string;
        companyId: string;
        createdAt: number;
        name: string;
        rule: MemberRulesEnum;
    };
    name: string;
    phoneNumber: string;
    photoURL: string;
    picture: string;
    refreshToken: string;
    stsTokenManager: {
        accessToken: string;
        apiKey: string;
        expirationTime: number;
    };
    token: string;
    uid: string;

    // #endregion Properties (24)
}