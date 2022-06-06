import { HiwRegistrationComponent } from './hiw-registration/hiw-registration.component';
import { HiwLinkBoardComponent } from './hiw-link-board/hiw-link-board.component';
import { HiwLibraryComponent } from './hiw-library/hiw-library.component';
import { HiwConnectComponent } from './hiw-connect/hiw-connect.component';
import { HiwMncComponent } from './hiw-mnc/hiw-mnc.component';
import { HiwExampleComponent } from './hiw-example/hiw-example.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'example', component: HiwExampleComponent},
  {path: 'registration', component: HiwRegistrationComponent},
  {path: 'link-board', component: HiwLinkBoardComponent},
  {path: 'library', component: HiwLibraryComponent},
  {path: 'connect', component: HiwConnectComponent},
  {path: 'mnc', component: HiwMncComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HowItWorksRoutingModule { }
