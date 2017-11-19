import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {ClarityModule} from 'clarity-angular';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app.routes.module';
import {HeaderComponent} from './components/header/header.component';
import {SidebarComponent} from './components/sidebar/sidebar.component';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {LoginComponent} from './components/login/login.component';

import {SampleModule} from '../../../Modules/Sample/Resources/src/sample.module';

import {ConfigService} from './services/config.service';
import {StorageService} from './services/storage.service';
import {HttpService} from './services/http.service';
import {AuthService} from './services/auth.service';
import {AuthInterceptor} from './interceptors/auth.interceptor';
import {AuthCheck} from './services/authcheck.service';
import {AlertService} from './services/alert.service';


@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent,
    AppComponent,
    LoginComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ClarityModule,
    AppRoutingModule,
    SampleModule
  ],
  providers: [
    ConfigService,
    StorageService,
    HttpService,
    AuthService,
    AuthCheck,
    AlertService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
