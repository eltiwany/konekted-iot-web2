import { MyCommonModule } from 'src/app/common/common.module';
import { FragmentsModule } from './../../../common/components/fragments/fragments.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LayoutsModule } from './../../../common/components/layouts/layouts.module';
import { DataTablesModule } from 'angular-datatables';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MncHardwaresRoutingModule } from './mnc-hardwares-routing.module';
import { AutomateHardwaresComponent } from './automate-hardwares/automate-hardwares.component';
import { MonitorHardwaresComponent } from './monitor-hardwares/monitor-hardwares.component';
import { ControlActuatorsComponent } from './control-actuators/control-actuators.component';

// MNC = Monitor and Control
@NgModule({
  declarations: [
    AutomateHardwaresComponent,
    MonitorHardwaresComponent,
    ControlActuatorsComponent
  ],
  imports: [
    CommonModule,
    DataTablesModule,
    LayoutsModule,
    FragmentsModule,
    MncHardwaresRoutingModule,
  ]
})
export class MncHardwaresModule { }
