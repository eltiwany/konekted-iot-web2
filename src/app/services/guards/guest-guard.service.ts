import { AppConfigService } from './../../common/services/app-config.service';
import { FunctionsService } from './../../common/services/extras/functions.service';
import { AuthService } from './../auth/auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class GuestGuardService implements CanActivate {

  canActivate(route: any, state: RouterStateSnapshot): any {
    let activeRoute = this.fn.toUpperCamelCase(route.url[0] ? route.url[0].path : "home");
    this.title.setTitle(activeRoute + " | " + this.config.app.name);

    if (!this.auth.isGuest()) {
      this.router.navigate(['/dashboard']);
      return false;
    }
    return true;
  }
  constructor(
    private auth: AuthService,
    private router: Router,
    private fn: FunctionsService,
    private title: Title,
    private config: AppConfigService
  ) { }
}
