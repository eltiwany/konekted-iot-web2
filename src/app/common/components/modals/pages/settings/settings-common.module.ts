import { MyCommonModule } from './../../../../common.module';
import { ViewPageAccessComponent } from './page-access/view-page-access/view-page-access.component';
import { ViewRolesComponent } from './roles/view-roles/view-roles.component';
import { EditRolesComponent } from './roles/edit-roles/edit-roles.component';
import { NewRolesComponent } from './roles/new-roles/new-roles.component';
import { DeleteRolesComponent } from './roles/delete-roles/delete-roles.component';
import { DeletePageAccessComponent } from './page-access/delete-page-access/delete-page-access.component';
import { EditPageAccessComponent } from './page-access/edit-page-access/edit-page-access.component';
import { NewPageAccessComponent } from './page-access/new-page-access/new-page-access.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    NewPageAccessComponent,
    EditPageAccessComponent,
    DeletePageAccessComponent,
    DeleteRolesComponent,
    NewRolesComponent,
    EditRolesComponent,
    ViewRolesComponent,
    ViewPageAccessComponent,
  ],
  imports: [
    CommonModule,
    MyCommonModule
  ]
})
export class SettingsCommonModule { }
