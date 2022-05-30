import { ProjectsComponent } from './projects/projects.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuestGuardService } from 'src/app/services/guards/guest-guard.service';

const routes: Routes = [
  {path: '', component: HomeComponent, canActivate: [GuestGuardService]},
  {path: 'home', component: HomeComponent, canActivate: [GuestGuardService]},
  {path: 'projects', component: ProjectsComponent, canActivate: [GuestGuardService]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebsiteRoutingModule { }
