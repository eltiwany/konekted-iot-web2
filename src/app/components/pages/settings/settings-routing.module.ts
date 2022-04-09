import { PageAccessComponent } from './page-access/page-access.component';
import { PermissionsComponent } from './permissions/permissions.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RolesComponent } from './roles/roles.component';

const routes: Routes = [
  {'path': 'roles', 'component': RolesComponent},
  {'path': 'permissions', 'component': PermissionsComponent},
  {'path': 'page-access', 'component': PageAccessComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingsRoutingModule { }
