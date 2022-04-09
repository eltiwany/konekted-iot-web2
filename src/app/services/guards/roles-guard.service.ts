import { AppConfigService } from './../../common/services/app-config.service';
import { FunctionsService } from './../../common/services/extras/functions.service';
import { AuthService } from './../auth/auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, Router, RouterStateSnapshot, CanActivateChild } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class RolesGuardService implements CanActivate, CanActivateChild {
  canActivate(route: any, state: RouterStateSnapshot): any {
    if(!this.isAllowed(route, state)) {
      this.router.navigate(['/no-access']);
    }
    return true;
  }

  canActivateChild(route: any, state: RouterStateSnapshot): any {
    if(!this.isAllowed(route, state)) {
      this.router.navigate(['/no-access']);
    }
    return true;
  }

  isAllowed(route: any, state: RouterStateSnapshot) {
    let isAllowed = false;
    let activeRoute = this.fn.toUpperCamelCase(route.url[0].path);

    this.title.setTitle(activeRoute + " | " + this.config.app.name);

    if (this.auth.isGuest()) {
      this.router.navigate(['/login']);
    }

    this.auth.getAuth().permissions.forEach((permission: any) => {
      if (permission.page == 'All' || permission.page == activeRoute) {
        isAllowed = true;
        return;
      }
    });

    return isAllowed;
  }

  constructor(
    private auth: AuthService,
    private router: Router,
    private fn: FunctionsService,
    private title: Title,
    private config: AppConfigService
  ) { }
}
