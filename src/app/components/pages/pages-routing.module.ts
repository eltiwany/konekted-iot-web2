import { UserLogsComponent } from './user-logs/user-logs.component';
import { UsersComponent } from './users/users.component';
import { NotFoundComponent } from './../../common/components/errors/not-found/not-found.component';
import { NoAccessComponent } from './../../common/components/errors/no-access/no-access.component';
import { RolesGuardService } from './../../services/guards/roles-guard.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from 'src/app/services/guards/auth-guard.service';

const routes: Routes = [
  // Stand-Alone Paths
  {'path': 'dashboard', 'component': DashboardComponent, canActivate: [AuthGuardService]},
  {'path': 'users', 'component': UsersComponent, canActivate: [AuthGuardService, RolesGuardService]},
  {'path': 'user-logs', 'component': UserLogsComponent, canActivate: [AuthGuardService, RolesGuardService]},
  // With Childrens
  {'path': 'settings', loadChildren: () => import('./settings/settings.module').then(m => m.SettingsModule), canActivateChild: [RolesGuardService]},
  {'path': 'my-area', loadChildren: () => import('./my-area/my-area.module').then(m => m.MyAreaModule), canActivateChild: [RolesGuardService]},
  {'path': 'preferences', loadChildren: () => import('./system-preferences/system-preferences.module').then(m => m.SystemPreferencesModule), canActivateChild: [RolesGuardService]},

  {'path': 'no-access', 'component': NoAccessComponent},
  {'path': '**', 'component': NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
