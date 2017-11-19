import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {ClarityModule} from 'clarity-angular';

import {AppRoutingModule} from './app.routes.module';
import {AppComponent} from './app.component';
import {DashboardComponent} from './dashboard/dashboard.component';

import {SampleModule} from '../../../Modules/Sample/Resources/src/sample.module';
import {HeaderComponent} from './header/header.component';
import {SidebarComponent} from './sidebar/sidebar.component';
import {LoginComponent} from './login/login.component';


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
    ClarityModule,
    AppRoutingModule,
    SampleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
