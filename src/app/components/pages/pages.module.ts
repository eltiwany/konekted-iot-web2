import { LayoutsModule } from './../../common/components/layouts/layouts.module';
import { SettingsModule } from './settings/settings.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { MyCommonModule } from 'src/app/common/common.module';
import { UsersComponent } from './users/users.component';
import { UserLogsComponent } from './user-logs/user-logs.component';

@NgModule({
  declarations: [
    UsersComponent,
    UserLogsComponent,
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    MyCommonModule,
    SettingsModule,
    LayoutsModule,
  ]
})
export class PagesModule { }
