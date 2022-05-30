import { DataTablesModule } from 'angular-datatables';
import { LayoutsModule } from './../../../common/components/layouts/layouts.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LinkHardwaresRoutingModule } from './link-hardwares-routing.module';
import { ActuatorsComponent } from './actuators/actuators.component';
import { SensorsComponent } from './sensors/sensors.component';
import { BoardsComponent } from './boards/boards.component';


@NgModule({
  declarations: [
    ActuatorsComponent,
    SensorsComponent,
    BoardsComponent
  ],
  imports: [
    CommonModule,
    DataTablesModule,
    LayoutsModule,
    NgbModule,
    LinkHardwaresRoutingModule,
  ]
})
export class LinkHardwaresModule { }
