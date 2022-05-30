import { ConfigPinTypesComponent } from './config-pin-types/config-pin-types.component';
import { ConfigActuatorsComponent } from './config-actuators/config-actuators.component';
import { ConfigSensorsComponent } from './config-sensors/config-sensors.component';
import { ConfigBoardsComponent } from './config-boards/config-boards.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'config-pin-types', component: ConfigPinTypesComponent},
  {path: 'config-boards', component: ConfigBoardsComponent},
  {path: 'config-sensors', component: ConfigSensorsComponent},
  {path: 'config-actuators', component: ConfigActuatorsComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConfigHardwaresRoutingModule { }
