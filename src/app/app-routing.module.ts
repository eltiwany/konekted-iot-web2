import { NotFoundComponent } from './common/components/errors/not-found/not-found.component';
import { HomeComponent } from './components/website/home/home.component';
import { AuthRoutingModule } from './components/auth/auth-routing.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {relativeLinkResolution: 'legacy'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
