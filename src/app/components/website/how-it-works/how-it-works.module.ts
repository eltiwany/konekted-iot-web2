import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HowItWorksRoutingModule } from './how-it-works-routing.module';
import { HiwExampleComponent } from './hiw-example/hiw-example.component';
import { HiwRegistrationComponent } from './hiw-registration/hiw-registration.component';
import { HiwLinkBoardComponent } from './hiw-link-board/hiw-link-board.component';
import { HiwLibraryComponent } from './hiw-library/hiw-library.component';
import { HiwConnectComponent } from './hiw-connect/hiw-connect.component';
import { HiwMncComponent } from './hiw-mnc/hiw-mnc.component';
import { ProgressTabsComponent } from './progress-tabs/progress-tabs.component';


@NgModule({
  declarations: [
    HiwExampleComponent,
    HiwRegistrationComponent,
    HiwLinkBoardComponent,
    HiwLibraryComponent,
    HiwConnectComponent,
    HiwMncComponent,
    ProgressTabsComponent
  ],
  imports: [
    CommonModule,
    HowItWorksRoutingModule
  ]
})
export class HowItWorksModule { }
