import { LayoutsModule } from './../../../common/components/layouts/layouts.module';
import { DataTablesModule } from 'angular-datatables';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingsRoutingModule } from './settings-routing.module';
import { PermissionsComponent } from './permissions/permissions.component';
import { PageAccessComponent } from './page-access/page-access.component';
import { RolesComponent } from './roles/roles.component';


@NgModule({
  declarations: [
    PermissionsComponent,
    PageAccessComponent,
    RolesComponent,
  ],
  imports: [
    CommonModule,
    SettingsRoutingModule,
    DataTablesModule,
    LayoutsModule,
  ]
})
export class SettingsModule { }
