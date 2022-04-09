import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MyCommonModule } from './../../../common/common.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LayoutsModule } from './../../../common/components/layouts/layouts.module';
import { DataTablesModule } from 'angular-datatables';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyAreaRoutingModule } from './my-area-routing.module';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { MyProfileComponent } from './my-profile/my-profile.component';


@NgModule({
  declarations: [
    ChangePasswordComponent,
    MyProfileComponent,
  ],
  imports: [
    CommonModule,
    MyAreaRoutingModule,
    DataTablesModule,
    LayoutsModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    NgMultiSelectDropDownModule
  ]
})
export class MyAreaModule { }
