import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SampleComponent} from './sample.component';
import {ActionComponent} from './components/action/action.component';
import {AnotherComponent} from './components/another/another.component';
import {AuthCheck} from '../../../../resources/src/app/services/authcheck.service';

const routes: Routes = [
  { path: 'sample', canActivate: [AuthCheck], children: [
    {path: '', component: SampleComponent},
    {path: 'action', component: ActionComponent},
    {path: 'another', component: AnotherComponent}
  ] }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class SampleRoutingModule {}
