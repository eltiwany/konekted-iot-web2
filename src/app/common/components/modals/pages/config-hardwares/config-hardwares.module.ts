import { NewConfigPinTypesComponent } from './config-pin-types/new-config-pin-types/new-config-pin-types.component';
import { MyCommonModule } from './../../../../common.module';
import { EditConfigBoardsComponent } from './config-boards/edit-config-boards/edit-config-boards.component';
import { NewConfigBoardsComponent } from './config-boards/new-config-boards/new-config-boards.component';
import { ViewConfigBoardsComponent } from './config-boards/view-config-boards/view-config-boards.component';
import { ViewConfigSensorsComponent } from './config-sensors/view-config-sensors/view-config-sensors.component';
import { NewConfigSensorsComponent } from './config-sensors/new-config-sensors/new-config-sensors.component';
import { EditConfigSensorsComponent } from './config-sensors/edit-config-sensors/edit-config-sensors.component';
import { EditConfigActuatorsComponent } from './config-actuators/edit-config-actuators/edit-config-actuators.component';
import { NewConfigActuatorsComponent } from './config-actuators/new-config-actuators/new-config-actuators.component';
import { ViewConfigActuatorsComponent } from './config-actuators/view-config-actuators/view-config-actuators.component';
import { DeleteConfigActuatorsComponent } from './config-actuators/delete-config-actuators/delete-config-actuators.component';
import { DeleteConfigSensorsComponent } from './config-sensors/delete-config-sensors/delete-config-sensors.component';
import { DeleteConfigBoardsComponent } from './config-boards/delete-config-boards/delete-config-boards.component';
import { DeleteConfigPinTypesComponent } from './config-pin-types/delete-config-pin-types/delete-config-pin-types.component';
import { EditConfigPinTypesComponent } from './config-pin-types/edit-config-pin-types/edit-config-pin-types.component';
import { ViewConfigPinTypesComponent } from './config-pin-types/view-config-pin-types/view-config-pin-types.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    // Boards
    EditConfigBoardsComponent,
    NewConfigBoardsComponent,
    ViewConfigBoardsComponent,
    DeleteConfigBoardsComponent,

    // Sensors
    ViewConfigSensorsComponent,
    NewConfigSensorsComponent,
    EditConfigSensorsComponent,
    DeleteConfigSensorsComponent,

    // Actuators
    EditConfigActuatorsComponent,
    NewConfigActuatorsComponent,
    ViewConfigActuatorsComponent,
    DeleteConfigActuatorsComponent,

    // Pin Types
    NewConfigPinTypesComponent,
    DeleteConfigPinTypesComponent,
    EditConfigPinTypesComponent,
    ViewConfigPinTypesComponent,
  ],
  imports: [
    CommonModule,
    MyCommonModule,
  ]
})
export class ConfigHardwaresModule { }
