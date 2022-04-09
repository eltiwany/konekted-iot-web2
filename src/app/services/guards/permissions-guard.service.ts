import { UrlService } from './../../common/services/extras/url.service';
import { FunctionsService } from './../../common/services/extras/functions.service';
import { AuthService } from './../auth/auth.service';
import { Router, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { Route } from '@angular/compiler/src/core';

@Injectable({
  providedIn: 'root'
})
export class PermissionsGuardService {

  /**
   * Check if action is allowed on
   * navigated page
   * @param permissionType type
   * @return true | false
   */
  isAllowedAction(permissionType: string): boolean {
    let activeRoute = this.url.getLastURLPath();
    let isAllowed = false;
    this.auth.getAuth().permissions.forEach((permission: any) => {
      if ((
            permission?.page == activeRoute ||
            permission.page == 'All'
          ) && (
            permissionType == permission?.name ||
            permission?.name == 'a')
      ) {
        isAllowed = true;
        return;
      }
    });
    return isAllowed;
  }

  isAllowedPath(routes: any[]) {
    let isAllowed = false;
    // let activeRoute = this.fn.toUpperCamelCase(route.url[0].path);
    // console.log(routes);

    this.auth.getAuth().permissions.forEach((permission: any) => {
      routes.forEach(route => {
        if (permission.page == 'All' || permission.page == this.fn.toUpperCamelCase(route)) {
          isAllowed = true;
          return;
        }
      });
    });

    return isAllowed;
  }

  constructor(
    private auth: AuthService,
    private fn: FunctionsService,
    private url: UrlService,
    private router: Router
  ) { }
}
