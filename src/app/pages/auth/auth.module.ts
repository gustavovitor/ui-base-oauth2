import { NgModule } from '@angular/core';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { SharedModule } from '../../shared/shared.module';
import { LoginPageComponent } from './login-page/login-page.component';

@NgModule({
  imports: [
    SharedModule,

    AuthRoutingModule
  ],
  declarations: [LoginComponent, LoginPageComponent]
})
export class AuthModule { }
