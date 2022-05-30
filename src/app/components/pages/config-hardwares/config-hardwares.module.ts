import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LayoutsModule } from './../../../common/components/layouts/layouts.module';
import { DataTablesModule } from 'angular-datatables';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConfigHardwaresRoutingModule } from './config-hardwares-routing.module';
import { ConfigBoardsComponent } from './config-boards/config-boards.component';
import { ConfigSensorsComponent } from './config-sensors/config-sensors.component';
import { ConfigActuatorsComponent } from './config-actuators/config-actuators.component';
import { ConfigPinTypesComponent } from './config-pin-types/config-pin-types.component';


@NgModule({
  declarations: [
    ConfigBoardsComponent,
    ConfigSensorsComponent,
    ConfigActuatorsComponent,
    ConfigPinTypesComponent
  ],
  imports: [
    CommonModule,
    DataTablesModule,
    LayoutsModule,
    NgbModule,
    ConfigHardwaresRoutingModule
  ]
})
export class ConfigHardwaresModule { }
