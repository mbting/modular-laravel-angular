import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpModule} from '@angular/http';
import {SampleComponent} from './sample.component';
import {SampleRoutingModule} from './sample.routes.module';
import {SampleDataService} from './services/data.service';
import {ActionComponent} from './components/action/action.component';
import {AnotherComponent} from './components/another/another.component';

@NgModule({
  declarations: [
    SampleComponent,
    ActionComponent,
    AnotherComponent
  ],
  imports: [
    CommonModule,
    HttpModule,
    SampleRoutingModule
  ],
  providers: [ SampleDataService ]
})
export class SampleModule { }
