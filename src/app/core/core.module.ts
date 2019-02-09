import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { JwtModule } from '@auth0/angular-jwt';

import { environment } from '../../environments/environment';
import { MessageService } from 'primeng/api';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AuthService } from '../services/security/auth.service';
import { BaseHttp } from '../services/security/base-http';
import { ToastModule } from 'primeng/toast';
import { AuthGuard } from '../services/security/guard/auth.guard';
import { LogoutService } from '../services/security/logout.service';

export function tokenGetter() {
  return localStorage.getItem('access_token');
}

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,

    JwtModule.forRoot({
      config: {
        tokenGetter,
        whitelistedDomains: environment.TokenWhitelistedDomains,
        blacklistedRoutes: environment.TokenBlacklistedRoutes
      }
    }),

    HttpClientModule
  ],
  exports: [
    ToastModule
  ],
  declarations: [],
  providers: [
    MessageService,

    HttpClient,
    BaseHttp,

    AuthService,
    LogoutService,
    AuthGuard
  ]
})
export class CoreModule { }
