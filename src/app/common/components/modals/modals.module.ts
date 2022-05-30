import { MyCommonModule } from 'src/app/common/common.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewUsersComponent } from './pages/users/view-users/view-users.component';
import { NewUsersComponent } from './pages/users/new-users/new-users.component';
import { DeleteUsersComponent } from './pages/users/delete-users/delete-users.component';
import { EditUsersComponent } from './pages/users/edit-users/edit-users.component';
import { ResetUsersComponent } from './pages/users/reset-users/reset-users.component';
import { ClearLogsComponent } from './pages/user-logs/clear-logs/clear-logs.component';

@NgModule({
  declarations: [
    ViewUsersComponent,
    NewUsersComponent,
    DeleteUsersComponent,
    EditUsersComponent,
    ResetUsersComponent,
    ClearLogsComponent,
  ],
  imports: [
    CommonModule,
    MyCommonModule
  ]
})
export class ModalsModule { }
