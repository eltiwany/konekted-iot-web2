import { SystemPreferencesComponent } from './system-preferences/system-preferences.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'system-preferences', 'component': SystemPreferencesComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SystemPreferencesRoutingModule { }
