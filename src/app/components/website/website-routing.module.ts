import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuestGuardService } from 'src/app/services/guards/guest-guard.service';

const routes: Routes = [
  {path: '', component: HomeComponent, canActivate: [GuestGuardService]},
  {path: 'home', component: HomeComponent, canActivate: [GuestGuardService]},
  {path: 'how-it-works', loadChildren: () => import('./how-it-works/how-it-works.module').then(m => m.HowItWorksModule), canActivate: [GuestGuardService]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebsiteRoutingModule { }
