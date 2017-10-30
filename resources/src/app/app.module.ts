import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app.routes.module';
import {AppComponent} from './app.component';
import {DashboardComponent} from './dashboard/dashboard.component';

import {SampleModule} from '../../../Modules/Sample/Resources/src/sample.module';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SampleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
