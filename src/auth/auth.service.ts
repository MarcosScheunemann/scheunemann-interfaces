// import { Injectable } from '@angular/core';

// import { BehaviorSubject, from, Observable, of } from 'rxjs';

// import { FirebaseApp } from '@angular/fire/app';
// import {
//     ApplicationVerifier,
//     Auth,
//     AuthCredential,
//     ConfirmationResult,
//     createUserWithEmailAndPassword,
//     EmailAuthProvider,
//     getAuth,
//     GoogleAuthProvider,
//     IdTokenResult,
//     linkWithCredential,
//     PhoneAuthProvider,
//     reauthenticateWithCredential,
//     sendEmailVerification,
//     sendPasswordResetEmail,
//     signInWithCredential,
//     signInWithEmailAndPassword,
//     signInWithPhoneNumber,
//     signInWithPopup,
//     signOut,
//     unlink,
//     updateEmail,
//     updateProfile,
//     User,
//     UserCredential,
//     UserInfo
// } from '@angular/fire/auth';
// import { ErrorCodesEnum } from './interfaces/errors.enum';
// import { ICredentialLogin } from './interfaces/i-credential';
// import { IFirebaseError } from './interfaces/i-firebase-error';
// import { PayloadService } from './payload/payload.service';

// @Injectable({
//     providedIn: 'root'
// })
// export class AuthService {
//     // #region Properties (2)

//     public auth: Auth | null = null;
//     public user$: BehaviorSubject<User | null> = new BehaviorSubject<User | null>(null);
//     private isInitialized = false;

//     // #endregion Properties (2)

//     // #region Constructors (1)

//     constructor(
//         private readonly payloadService: PayloadService,
//         private app: FirebaseApp,
//     ) {
//         this.auth = getAuth(this.app);
//     }

//     // #endregion Constructors (1)

//     // #region Public Accessors (1)

//     public get idTokenResult$(): Observable<IdTokenResult | null> {
//         if (!this.auth?.currentUser) {
//             return of(null);
//         }
//         return from(this.auth?.currentUser?.getIdTokenResult(true));
//     }

//     // #endregion Public Accessors (1)

//     // #region Public Methods (18)


//     public initialize(): void {
//         if (this.isInitialized) {
//             return;
//         }
//         if (!this.auth) {
//             return;
//         }
//         this.auth.onIdTokenChanged((user: User | null) => {
//             this.user$.next(user);
//             if (user) {
//                 user.getIdToken().then((token) => {
//                     const res = { token };
//                     this.payloadService.processToken(res);
//                 });
//             } else {
//                 this.payloadService.processToken(null);
//             }
//         });
//         this.isInitialized = true;
//     }

//     public async onAddEmailAndPassword(email: string, password: string, name: string): Promise<User> {
//         const currentUser = this.auth?.currentUser;
//         if (!currentUser) {
//             throw new Error('Usuário não está logado');
//         }
//         if (!currentUser.email && !email) {
//             throw new Error('Usuário não possui email para vincular. Faça o login e tente novamente.');
//         }
//         email = currentUser.email || email;
//         const credential = EmailAuthProvider.credential(currentUser.email || email, password);
//         await this.onLinkCredential(credential, email, password);
//         await this.onReloadUser(false);
//         if (name) {
//             await this.onUpdateProfile(currentUser, name);
//         }
//         await sendEmailVerification(currentUser);
//         this.user$.next(currentUser);
//         return currentUser;
//     }

//     public onGetCurrentUser(): User | null {
//         return this.auth?.currentUser ?? null;
//     }

//     public onHasProvider(provider: 'password' | 'phone' | 'google.com' | 'all'): boolean {
//         if (!this.auth?.currentUser) {
//             return false;
//         }
//         const providerData = this.auth?.currentUser?.providerData ?? [];
//         if (!providerData.length) {
//             return false;
//         }
//         if (provider !== 'all') {
//             return providerData.map((res: UserInfo | null) => res?.providerId).includes(provider);
//         }
//         const hasPassword = providerData.map((res: UserInfo | null) => res?.providerId).includes('password');
//         const hasPhone = providerData.map((res: UserInfo | null) => res?.providerId).includes('phone');
//         return hasPassword && hasPhone;
//     }

//     public async onLinkPhoneCredential(verificationCode: string, localVerificationCode: string): Promise<void> {
//         try {
//             const phoneCredential = PhoneAuthProvider.credential(localVerificationCode, verificationCode);
//             const authCredential: AuthCredential = phoneCredential as unknown as AuthCredential;
//             return await this.onLinkCredential(authCredential, '', '');
//         } catch (error) {
//             if (this.isFirebaseError(error)) {
//                 switch (true) {

//                     default:
//                         throw error;
//                 }
//             } else {
//                 throw error;
//             }
//         }
//     }

//     public onRecoveryPassword(email: string): Observable<void> {
//         if (!this.auth) {
//             throw new Error('Erro ao recuperar senha: credencial não está definida [EE905]');
//         }
//         return from(sendPasswordResetEmail(this.auth, email));
//     }

//     // eslint-disable-next-line max-len
//     public async onRegisterUser(obj: ICredentialLogin, link: boolean): Promise<void> {
//         try {
//             if (!this.auth) {
//                 throw new Error('Erro ao recuperar senha: credencial não está definida [EE906]');
//             }
//             const userCredential = await createUserWithEmailAndPassword(this.auth, obj.email, obj.password);
//             const user = userCredential.user;
//             if (obj.name) {
//                 await this.onUpdateProfile(user, obj.name);
//             }
//             const authCredential = EmailAuthProvider.credential(obj.email, obj.password);
//             await sendEmailVerification(user);
//             if (link) {
//                 await this.onLinkCredential(authCredential, obj.email, obj.password);
//             }
//         } catch (error) {
//             return this.handlerFirebaseError(error);
//         }
//     }

//     public async onReloadUser(nextUser: boolean): Promise<void> {
//         const currentUser = this.auth?.currentUser;
//         if (!currentUser) {
//             return;
//         }
//         await currentUser.reload();
//         if (nextUser) {
//             this.user$.next(currentUser);
//         }
//     }

//     public async onSendEmailVerification(): Promise<void> {
//         const currentUser = this.auth?.currentUser;
//         if (!currentUser) {
//             throw new Error('Usuário não está logado [DD98]');
//         }
//         if (!this.auth) {
//             throw new Error('Erro ao recuperar senha: credencial não está definida [EE907]');
//         }
//         return await sendEmailVerification(currentUser);
//     }

//     public async onSignInWithEmailAndPassword(email: string, password: string): Promise<UserCredential> {
//         try {
//             if (!this.auth) {
//                 throw new Error('Erro ao recuperar senha: credencial não está definida [EE908]');
//             }
//             const userCredential = await signInWithEmailAndPassword(this.auth, email, password);
//             this.user$.next(userCredential.user); // Emitir o usuário logado no BehaviorSubject
//             return userCredential;
//         } catch (error) {
//             return this.handlerFirebaseError(error);
//         }
//     }

//     public async onSignInWithPhoneNumber(phoneNumber: string, recaptchaVerifier: ApplicationVerifier): Promise<ConfirmationResult> {
//         if (!this.auth) {
//             throw new Error('Erro ao recuperar senha: credencial não está definida [EE909]');
//         }
//         return await signInWithPhoneNumber(this.auth, phoneNumber, recaptchaVerifier);
//     }

//     public async onSignInWithPopup(providerType: 'GOOGLE' | 'OUTROS'): Promise<UserCredential> {
//         if (providerType === 'GOOGLE') {
//             try {
//                 const provider = new GoogleAuthProvider();
//                 if (!this.auth) {
//                     throw new Error('Erro ao recuperar senha: credencial não está definida [EE910]');
//                 }
//                 return signInWithPopup(this.auth, provider);
//             } catch (error) {
//                 return this.handlerFirebaseError(error);
//             }
//         } else {
//             throw new Error('Provedor não suportado [9824]');
//         }
//     }

//     public async onSignOut(): Promise<void> {
//         await signOut(this.auth!);
//         this.user$.next(null);
//         this.payloadService.payload$.next(null);
//     }

//     public async onUnlinkAuthProvider(): Promise<User> {
//         try {
//             const user = this.auth?.currentUser;
//             if (!user) {
//                 throw new Error('Usuário não está logado');
//             }
//             const providerId = this.onGetPhoneProviderId();
//             if (!providerId) {
//                 throw new Error('Provedor de autenticação não encontrado');
//             }
//             return await unlink(user, providerId);
//         } catch (error) {
//             console.log('Erro ao remover provedor de autenticação:', error);
//             throw error;
//         }
//     }

//     public async onUpdateCredentialEmail(newEmail: string, currentPassword: string): Promise<void> {
//         const currentUser = this.auth?.currentUser;
//         const currentEmail = currentUser?.email ?? '';
//         if (currentUser) {
//             try {
//                 const credential = EmailAuthProvider.credential(currentEmail, currentPassword);
//                 await reauthenticateWithCredential(currentUser, credential);
//                 return updateEmail(currentUser, newEmail);
//             } catch (err) {
//                 console.error(err);
//                 throw err;
//             }
//         }
//         throw new Error('Usuário não está logado - 9847D');
//     }

//     public async onUpdateProfile(currentUser: User | null | undefined, name: string): Promise<void> {
//         // Primeiro, garanta que temos um nome válido
//         if (!name) {
//             throw new Error('Nome não informado');
//         }

//         // Se currentUser não for fornecido, tente obter a partir de this.auth
//         if (!currentUser) {
//             currentUser = this.auth?.currentUser;
//         }

//         // Se ainda for null ou undefined, lance um erro
//         if (!currentUser) {
//             throw new Error('Usuário não está logado');
//         }
//         return await updateProfile(currentUser, { displayName: name });
//     }

//     public async onVerifyPhoneCode(verificationCode: string, localVerificationCode: string): Promise<UserCredential> {
//         if (!localVerificationCode) {
//             throw new Error('ID de verificação não encontrado');
//         }
//         const currentUser = this.auth!.currentUser;
//         const phoneCredential = PhoneAuthProvider.credential(localVerificationCode, verificationCode);
//         if (currentUser) {
//             try {
//                 return await linkWithCredential(currentUser, phoneCredential);
//             } catch (error) {
//                 this.handlerFirebaseError(error);
//             }
//         } else {
//             try {
//                 return await signInWithCredential(this.auth!, phoneCredential);
//             } catch (error) {
//                 this.handlerFirebaseError(error);
//             }
//         }
//     }

//     public async reauthenticateUser(currentUser: User, email: string, password: string): Promise<void> {
//         try {
//             const reauthCredential = EmailAuthProvider.credential(email, password);
//             await reauthenticateWithCredential(currentUser, reauthCredential);
//         } catch (error) {
//             if (this.isFirebaseError(error)) {
//                 if (error.code === ErrorCodesEnum.authWrongPassword) {
//                     let txt = 'Senha incorreta. Verifique e tente novamente. ';
//                     txt += 'Ou clique em "Esqueci minha senha" para redefinir sua senha.';
//                     throw new Error(txt);
//                 }
//                 throw error;
//             } else {
//                 throw error;
//             }
//         }
//     }

//     // #endregion Public Methods (18)

//     // #region Private Methods (3)

//     private isFirebaseError(error: any): error is IFirebaseError {
//         return error && typeof error.code === 'string' && typeof error.message === 'string';
//     }

//     private onGetPhoneProviderId(): string | null {
//         const user: User | null = this.onGetCurrentUser();
//         if (user) {
//             const providerId = 'phone';
//             const provider = user.providerData.find(res => res.providerId === providerId);
//             if (provider) {
//                 return provider.providerId;
//             } else {
//                 return null;
//             }
//         } else {
//             return null;
//         }
//     }

//     private async onLinkCredential(credential: AuthCredential, email: string, password: string): Promise<void> {
//         const currentUser = this.auth?.currentUser;
//         if (!currentUser) {
//             throw new Error('Usuário não está logado 9684');
//         }
//         try {
//             await linkWithCredential(currentUser, credential);
//         } catch (error) {
//             if (this.isFirebaseError(error)) {
//                 if (error.code === ErrorCodesEnum.requiresRecentLogin) {
//                     this.onSignOut();
//                     throw new Error('Por motivos de segurança, precisamos que você faça login novamente para continuar. Por favor, entre com sua conta.');
//                 }
//                 throw error;
//             } else {
//                 throw error;
//             }
//         }
//     }
//     private handlerFirebaseError(error: any): never {
//         const errorCode = error.code || error.message;  // Usando o code, se estiver presente, senão usa a message.
    
//         const errorsMap:{
//             [key: string]: string;
//         } = {
//             [ErrorCodesEnum.userNotFound]: 'Conta não encontrada! 9847',
//             [ErrorCodesEnum.manyAttempts]: 'Muitas tentativas de login. Tente novamente mais tarde.',
//             [ErrorCodesEnum.wrongPassword]: 'Senha incorreta. Verifique e tente novamente.',
//             [ErrorCodesEnum.notAllowed]: 'Conta desabilitada. Entre em contato com o suporte.',
//             [ErrorCodesEnum.popUpClosed]: 'Janela de login fechada. Tente novamente.',
//             [ErrorCodesEnum.invalidCode]: 'Código de verificação inválido.',
//             [ErrorCodesEnum.missingVerificationCode]: 'Código de verificação ausente.',
//             [ErrorCodesEnum.codeExpired]: 'Código de verificação expirado.',
//             [ErrorCodesEnum.alreadUse]: 'Este E-mail já está em uso. Faça o login ou tente registrar com outro E-mail.',
//             [ErrorCodesEnum.existDifferent]: 'Este E-mail já está em uso. Faça o login ou tente registrar com outro E-mail.',
//             [ErrorCodesEnum.userMismatch]: 'A credencial que você está tentando vincular não corresponde ao usuário atualmente conectado. Faça o login com o usuário correto e tente novamente.',
//             [ErrorCodesEnum.invalidVerificationId]: 'Código de verificação inválido.',
//             // Adicione outros erros conforme necessário.
//         };
    
//         // Verifica se é um erro conhecido e lança a mensagem correspondente.
//         for (const key in errorsMap) {
//             if (errorCode.includes(key)) {
//                 throw new Error(errorsMap[key]);
//             }
//         }
    
//         // Se chegou até aqui, lança o erro original, pois não é um erro tratado.
//         throw error;
//     }
//     // #endregion Private Methods (3)
// }