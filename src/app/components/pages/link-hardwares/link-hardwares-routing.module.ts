import { ActuatorsComponent } from './actuators/actuators.component';
import { SensorsComponent } from './sensors/sensors.component';
import { BoardsComponent } from './boards/boards.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'boards', component: BoardsComponent},
  {path: 'sensors', component: SensorsComponent},
  {path: 'actuators', component: ActuatorsComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LinkHardwaresRoutingModule { }
