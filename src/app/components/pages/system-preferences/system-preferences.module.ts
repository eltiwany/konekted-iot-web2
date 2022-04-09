import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LayoutsModule } from './../../../common/components/layouts/layouts.module';
import { MyCommonModule } from './../../../common/common.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SystemPreferencesRoutingModule } from './system-preferences-routing.module';
import { SystemPreferencesComponent } from './system-preferences/system-preferences.component';


@NgModule({
  declarations: [
    SystemPreferencesComponent
  ],
  imports: [
    CommonModule,
    LayoutsModule,
    FormsModule,
    ReactiveFormsModule,
    SystemPreferencesRoutingModule
  ]
})
export class SystemPreferencesModule { }
