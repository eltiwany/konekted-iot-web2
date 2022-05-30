import { MyCommonModule } from './../../../../common.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewActuatorsComponent } from './actuators/view-actuators/view-actuators.component';
import { NewActuatorsComponent } from './actuators/new-actuators/new-actuators.component';
import { EditActuatorsComponent } from './actuators/edit-actuators/edit-actuators.component';
import { EditSensorsComponent } from './sensors/edit-sensors/edit-sensors.component';
import { NewSensorsComponent } from './sensors/new-sensors/new-sensors.component';
import { ViewSensorsComponent } from './sensors/view-sensors/view-sensors.component';
import { ViewBoardsComponent } from './boards/view-boards/view-boards.component';
import { NewBoardsComponent } from './boards/new-boards/new-boards.component';
import { EditBoardsComponent } from './boards/edit-boards/edit-boards.component';
import { DeleteBoardsComponent } from './boards/delete-boards/delete-boards.component';
import { DeleteSensorsComponent } from './sensors/delete-sensors/delete-sensors.component';
import { DeleteActuatorsComponent } from './actuators/delete-actuators/delete-actuators.component';



@NgModule({
  declarations: [
    ViewActuatorsComponent,
    NewActuatorsComponent,
    EditActuatorsComponent,
    EditSensorsComponent,
    NewSensorsComponent,
    ViewSensorsComponent,
    ViewBoardsComponent,
    NewBoardsComponent,
    EditBoardsComponent,
    DeleteBoardsComponent,
    DeleteSensorsComponent,
    DeleteActuatorsComponent
  ],
  imports: [
    CommonModule,
    MyCommonModule
  ]
})
export class LinkHardwaresModule { }
