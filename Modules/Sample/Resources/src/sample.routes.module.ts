import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SampleComponent} from './sample.component';
import {AuthCheck} from '../../../../resources/src/app/services/authcheck.service';

const routes: Routes = [
  { path: 'sample',  component: SampleComponent, canActivate: [AuthCheck] }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class SampleRoutingModule {}
