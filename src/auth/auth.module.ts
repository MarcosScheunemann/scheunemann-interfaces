import { NgModule } from '@angular/core';
import { AuthService } from './auth.service';
import { PayloadService } from './payload/payload.service';

@NgModule({
    providers: [AuthService, PayloadService]
})
export class AuthServiceModule { }